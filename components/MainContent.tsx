"use client"

import {
  Box,
  VStack,
  Text,
  Heading,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Divider,
} from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { fetchVulnerabilityData } from "../lib/mockApi"

export function MainContent() {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  const { data: vulnerabilityData, isLoading } = useQuery({
    queryKey: ["vulnerability"],
    queryFn: fetchVulnerabilityData,
  })

  if (isLoading) {
    return (
      <Box flex={1} p={6}>
        <Text>Loading...</Text>
      </Box>
    )
  }

  return (
    <Box
      w="385px"
      bg={bgColor}
      borderColor={borderColor}
      role="main"
      aria-label="Main content"
      mt={8}
      borderRadius="xl"
      border=""
      overflowY="auto"
      maxH="100vh"
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none'
      }}
    >
      <VStack spacing={6} align="stretch" p={6}>
        <Box>
          <Heading as="h2" size="md" mb={4} color="brand.600">
            Description
          </Heading>
          <Text fontSize="xs" lineHeight="1.6" color="gray.600">
            {vulnerabilityData?.description}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="md" mb={4} color="brand.600">
            Extra
          </Heading>
          <Text fontSize="xs" lineHeight="1.6" color="gray.600" mb={6}>
            {vulnerabilityData?.extra}
          </Text>
      <Divider />

          <TableContainer>
            <Table variant="simple" size="xs">
              <Thead>
                <Tr>
                  <Th border="none" px={0} py={2} fontSize="xs" fontWeight="normal" color="gray.500">
                    {/* Property */}
                  </Th>
                  <Th border="none" px={0} py={2} fontSize="xs" fontWeight="normal" color="gray.500">
                    {/* Value */}
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {vulnerabilityData?.details.map((detail, index) => (
                  <Tr key={index}>
                    <Td border="none" px={0} py={2} fontSize="xs" color="gray.700">
                      {detail.label}
                    </Td>
                    <Td border="none" px={0} py={2} fontSize="xs" color="gray.700">
                      {detail.value || "-"}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </VStack>
    </Box>
  )
}