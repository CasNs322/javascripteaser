import type { UserType } from '../types';
import { API_BASE_URL } from '../constants';

export async function getOneUser() {
  const response = await fetch(`${API_BASE_URL}/users/1`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: UserType = await response.json();

  return data;
}
