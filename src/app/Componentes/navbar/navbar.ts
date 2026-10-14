import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbar, MatIcon, RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
