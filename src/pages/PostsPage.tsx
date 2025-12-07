import { Loader, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { getOneUser } from '../api';
import { User } from '../components';

export function PostsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['post', 1],
    queryFn:  getOneUser,
  });

  if (isError) {
    return <Text c="red">Error while fetching posts</Text>;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    return (
      <User data={data} />
    );
  }
}
