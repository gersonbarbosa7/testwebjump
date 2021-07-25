import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import FlatHeader from '../src/components/FlatHeader';

test('should be contain text', async () => {
  
  const { getByText } = render(<FlatHeader />);
  const expectText = getByText('Lista de filmes');

  await waitFor(() => expect(expectText).toBeTruthy());
  
});

test('should be contain credits', async () => {
  
  const { getByText } = render(<FlatHeader />);
  const expectEmail = getByText('Criado por Gerson Barbosa, gersonbarbosa7@gmail.com');

  await waitFor(() => expect(expectEmail).toBeTruthy());
  
});