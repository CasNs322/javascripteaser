import type { Address } from '../../types';
import { Group, Paper, Text } from '@mantine/core';

interface UserAddressProps {
  address: Address;
}

export function UserAddress({ address }: UserAddressProps) {
  return (
    <Paper p="xs" maw={300} bd="1px solid gray">
      <Group gap={5}>
        <Text fz="sm">Street:</Text>
        <Text fz="sm" fw="bold">{address.street}</Text>
      </Group>
      <Group gap={5}>
        <Text fz="sm">City:</Text>
        <Text fz="sm" fw="bold">{address.city}</Text>
      </Group>
      <Group gap={5}>
        <Text fz="sm">Suite:</Text>
        <Text fz="sm" fw="bold">{address.suite}</Text>
      </Group>
      <Group gap={5}>
        <Text fz="sm">Zipcode:</Text>
        <Text fz="sm" fw="bold">{address.zipcode}</Text>
      </Group>
    </Paper>
  );
}
