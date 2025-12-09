import { IFormat } from "./i-format";

export class FormatEuropean implements IFormat {
  /**
   * Method that converts Kelvin into Celsius
   *
   * @param unformattedTemperature temperature in degrees Kelvin
   * @returns temperature in Celsius
   */
  getTemperature(unformattedTemperature: number): number {
    return unformattedTemperature + 273.15;
  }
}
