import { Component, OnInit } from '@angular/core';
import { PickdialogComponent } from '../pickdialog/pickdialog.component';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';

import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-scannerdialog',
  templateUrl: './scannerdialog.component.html',
  styleUrls: ['./scannerdialog.component.css']
})
export class ScannerdialogComponent implements OnInit {

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  hasDevices: boolean;
  hasPermission: boolean;

  qrResultString: string;

  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  tryHarder = false;

  
  constructor(private readonly dialog: MatDialog) { }

  ngOnInit() {
  }

  clearResult(): void {
    this.qrResultString = null;
    // this.availableDevices=null;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

  onDeviceSelectChange(selected: string) {
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.currentDevice = device || null;
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }


  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }

  toggleTryHarder(): void {
    this.tryHarder = !this.tryHarder;
  }


  submit():void
  {
  
    const dialogRef = this.dialog.open(PickdialogComponent, { 
      width: '400px',
      height:'425px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    window.scrollTo(0, 0);
  }

}
