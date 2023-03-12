import HStack from '@src/app/common/components/HStack';
import Typography from '@src/app/common/components/Typography';
import VStack from '@src/app/common/components/VStack';

const Folder = () => {
  return (
    <VStack maxWidth="320px" width="30%">
      <HStack height="30px" minHeight="30px" border="1px solid #e8e8e8" bg="grey-100"></HStack>
      <VStack height="100%" bg="grey-900" p={10} gap={8} flexGrow={1}>
        <HStack justifyContent="space-between" p={6} bg="grey-700" borderRadius={4}>
          <Typography kind="body3" as="p" color="white">
            방명록
          </Typography>
          <Typography kind="body3" as="p" color="white">
            4
          </Typography>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Folder;
