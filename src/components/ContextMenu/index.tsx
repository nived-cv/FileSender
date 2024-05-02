import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';

interface ButtonProps {
  children: React.ReactNode[];
  options: {label: string; value: any}[];
  onSelect: (value: any) => void;
}
export const ContextMenu = ({children}: ButtonProps) => {
  const handlePress = (index: number) => {};

  return (
    <ScrollView>
      {React.Children.map(children, (child, index) => {
        return (
          <TouchableOpacity onPress={() => handlePress(index)}>
            {' '}
            {child}{' '}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
