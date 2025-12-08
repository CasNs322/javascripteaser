import type { UserType } from "../../types";
import {
  Accordion,
  Anchor,
  Avatar,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import {
  IconBrandXbox,
  IconHome,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { UserAddress } from "./UserAddress";
import { UserCompany } from "./UserCompany";

interface UserProps {
  data: UserType;
}

export function User({ data }: UserProps) {
  return (
    <Paper p="xs" maw={450} bd="1px solid gray">
      <Stack>
        <Group justify="space-between" align="center">
          <Avatar />
          <Title size="h3">{data.name}</Title>
          <Tooltip label="Username">
            <Text size="md" c="gray" style={{ justifySelf: "flex-end" }}>
              {data.username}
            </Text>
          </Tooltip>
        </Group>
        <Accordion>
          <Accordion.Item value={`${data.id} address`}>
            <Accordion.Control icon={<IconHome />}>Address</Accordion.Control>
            <Accordion.Panel>
              <UserAddress address={data.address} />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value={`${data.id} company`}>
            <Accordion.Control icon={<IconBrandXbox />}>
              Company
            </Accordion.Control>
            <Accordion.Panel>
              <UserCompany company={data.company} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Group gap={5}>
          <IconMail />
          <Text size="md">{data.email}</Text>
        </Group>
        <Group gap={5}>
          <IconPhone />
          <Text size="md">{data.phone}</Text>
        </Group>
        <Tooltip label="User website">
          <Anchor href="/" size="md">
            {data.website}
          </Anchor>
        </Tooltip>
      </Stack>
    </Paper>
  );
}
