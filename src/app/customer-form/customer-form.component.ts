import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.interface';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
  customer: Customer = {
    username: '',
    password: '',
    customerName: '',
    dateOfBirth: '',
    gender: 'M'
  };

  isEditMode = false;
  customerId: number | null = null;
  isLoading = false;
  errorMessage = '';

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.customerId = +params['id'];
        this.loadCustomer();
      }
    });
  }

  loadCustomer(): void {
    if (this.customerId) {
      this.customerService.getCustomer(this.customerId).subscribe({
        next: (customer) => {
          this.customer = customer;
          // Don't include password in edit mode
          delete this.customer.password;
        },
        error: (error) => {
          this.errorMessage = error.message;
        }
      });
    }
  }

  onSubmit(): void {
    this.isLoading = true;
    this.errorMessage = '';

    if (this.isEditMode && this.customerId) {
      // For edit mode, only send the fields that can be updated
      const updateData: Partial<Customer> = {
        username: this.customer.username,
        customerName: this.customer.customerName,
        dateOfBirth: this.customer.dateOfBirth,
        gender: this.customer.gender
      };

      this.customerService.updateCustomer(this.customerId, updateData).subscribe({
        next: () => {
          this.router.navigate(['/customers']);
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.isLoading = false;
        }
      });
    } else {
      // Create new customer
      this.customerService.createCustomer(this.customer).subscribe({
        next: () => {
          this.router.navigate(['/customers']);
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.isLoading = false;
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/customers']);
  }
}
