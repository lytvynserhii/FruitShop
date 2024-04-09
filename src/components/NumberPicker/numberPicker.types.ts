export interface NumberPickerProps {
  value: number;
  onChangeValue: (newValue: number) => void;
  minValue?: number;
  maxValue?: number;
}
