import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
type Props = {
    img: string;
    name: string;
    fullName: string;
}
export const UserCard: FC<Props> = memo((props) => {
    const { img, name, fullName } = props
    return (
        <>
            <Box w="260px" h="260px" bg="white"
                borderRadius="10px" shadow="md"
                p={4} _hover={{ cursor: "pointer", opacity: 0.8 }}>
                <Stack textAlign="center">
                    <Image boxSize="160px" borderRadius="full"
                        alt="プロフィール画像" m="auto"
                        src={img} />
                    <Text fontSize="lg" fontWeight="bold">{name}</Text>
                    <Text fontSize="sm" color="gray">{fullName}</Text>
                </Stack>
            </Box>
        </>
    );
});