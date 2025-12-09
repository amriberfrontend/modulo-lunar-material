import { IFormat } from "./i-format";

export class FormatAmerican implements IFormat {
  /**
   * Method that converts Kelvin into Fahrenheit
   *
   * @param unformattedTemperature temperature in Kelvin
   * @returns temperature in Fahrenheit
   */
  getTemperature(unformattedTemperature: number): number {
    return (unformattedTemperature - 273.15) * 9 / 5 + 32
  }

}
