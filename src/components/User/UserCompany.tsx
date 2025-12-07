import type { Company } from '../../types';
import { Group, Paper, Text } from '@mantine/core';

interface UserCompanyProps {
  company: Company;
}

export function UserCompany({ company }: UserCompanyProps) {
  return (
    <Paper p="xs" bd="1px solid gray">
      <Group gap={5}>
        <Text fz="sm">Company name:</Text>
        <Text fz="sm" fw="bold">{company.name}</Text>
      </Group>
      <Group gap={5} style={{ overflowX: 'hidden', flexWrap: 'nowrap' }}>
        <Text w={100} fz="sm" lineClamp={1}>Catch phrase:</Text>
        <Text fz="sm" fw="bold" lineClamp={1}>{company.catchPhrase}</Text>
      </Group>
      <Group gap={5}>
        <Text fz="sm">Bs:</Text>
        <Text fz="sm" fw="bold">{company.bs}</Text>
      </Group>
    </Paper>
  );
}
