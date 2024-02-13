import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  user!: any[];
  userId!: number;
  userForm: FormGroup; // Declare form property

  constructor(private userService: UserServiceService, private route: ActivatedRoute,  private fb: FormBuilder){
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; // Convert to number if necessary
      this.userService.getUserById(this.userId).subscribe(user => {
        this.user = user;
        this.userForm.patchValue(user); // Populate form with user data

      });
    }); 
    }

    onSubmit() {
      if (this.userForm.valid) {
        const formData = this.userForm.value;
        // Implement update logic here, e.g., call a service to update the user
        console.log(formData); // Placeholder for update logic
      }
    }
  }
