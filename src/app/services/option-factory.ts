import { Injectable } from '@angular/core';
import { Option } from '../models/option';

@Injectable({
  providedIn: 'root',
})
export class OptionFactory {
  getGroupOptions(): Option[] {
    const options = [
      new Option('igneous', $localize`Igneous`),
      new Option('sedimentary', $localize`Sedimentary`),
      new Option('metamorphic', $localize`Metamorphic`),
    ];
    return sorted(options);
  }

  getGrainSizeOptions(): Option[] {
    const options = [
      new Option('fine', $localize`Fine`),
      new Option('medium', $localize`Medium`),
      new Option('coarse', $localize`Coarse`),
      new Option('veryCoarse', $localize`Very coarse`),
    ];
    return options;
  }

  getTextureOptions(): Option[] {
    const options = [
      new Option('vitreous', $localize`Vitreous`),
      new Option('aphanitic', $localize`Aphanitic`),
      new Option('phaneritic', $localize`Phaneritic`),
    ];
    return sorted(options);
  }

  getClassificationOptions(): Option[] {
    const options = [
      new Option('construction', $localize`Construction`),
      new Option('ornamental', $localize`Ornamental`),
      new Option('tools', $localize`Tools`),
      new Option('crushing', $localize`Crushing`),
    ];
    return sorted(options);
  }
}

function sorted(options: Option[]) {
  return options.sort((a, b) => a.value.localeCompare(b.value));
}
