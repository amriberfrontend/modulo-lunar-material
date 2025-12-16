import { Component, model, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Field, form, required } from '@angular/forms/signals';
import { Rock } from '../../models/rock';
import { IMaterial } from '../../models/i-material';
import { RockBuilder } from '../../models/rock-builder';

@Component({
  selector: 'app-rock-form',
  imports: [Field, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './rock-form.html',
  styleUrl: './rock-form.scss',
})
export class RockForm {
  rockModel = signal<Rock>({
    identifier: '',
    name: '',
    group: '',
    hardness: 0,
    grainSize: 0,
    utility: '',
    crystalSize: 0,
    formationTemperature: 0,
    texture: '',
    structure: '',
    grainShape: ''
  });

  rockForm = form(this.rockModel);
  rock = model<Rock>();


  showValues() {
    console.log("hi");
    const rockData = this.rockModel();
    this.rock.set(new RockBuilder()
                    .setIdentifier(rockData.identifier)
                    .setName(rockData.name)
                    .setGroup(rockData.group)
                    .setHardness(rockData.hardness)
                    .setGrainSize(rockData.grainSize)
                    .setUtility(rockData.utility)
                    .setCrystalSize(rockData.crystalSize)
                    .setFormationTemperature(rockData.formationTemperature)
                    .setStructure(rockData.structure)
                    .setGrainShape(rockData.grainShape)
                    .setTexture(rockData.texture)
                    .build());
    alert(this.rock.toString());
  }
}
