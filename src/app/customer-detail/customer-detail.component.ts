import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.interface';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css'
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer | null = null;
  isLoading = false;
  errorMessage = '';
  customerId: number | null = null;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.customerId = +params['id'];
        this.loadCustomer();
      }
    });
  }

  loadCustomer(): void {
    if (this.customerId) {
      this.isLoading = true;
      this.errorMessage = '';

      this.customerService.getCustomer(this.customerId).subscribe({
        next: (customer) => {
          this.customer = customer;
          this.isLoading = false;
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
