import { Component } from '@angular/core';
import { Button } from "../../components/button/button";
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-dashboard',
  imports: [Button, Card],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
