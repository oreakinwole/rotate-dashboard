"use client"

import { Box, VStack, HStack, Text, Avatar, IconButton, useColorModeValue, Button } from "@chakra-ui/react"
import { NavigationIcon } from "./NavigationIcon"
import { ExternalLinkIcon } from "@chakra-ui/icons"

export function Sidebar() {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const activeItemBg = useColorModeValue("brand.50", "brand.900")
  const activeItemColor = useColorModeValue("brand.600", "brand.200")
  const hoverBg = useColorModeValue("gray.100", "gray.700")

const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    isActive: true,
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: 'folder',
    isActive: false,
  },
  {
    id: 'tasks',
    label: 'Tasks',
    icon: 'check-circle',
    isActive: false,
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: 'calendar',
    isActive: false,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
    isActive: false,
  },
]


//   if (isLoading) {
//     return (
//       <Box w="240px" bg={bgColor} borderRight="1px" borderColor={borderColor} p={4}>
//         <Text>Loading...</Text>
//       </Box>
//     )
//   }

  return (
    <Box
      w="240px"
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      display="flex"
      flexDirection="column"
      role="navigation"
      aria-label="Main navigation"
    >
      <VStack spacing={1} p={4} flex={1}>
        {navigationItems?.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            w="full"
            justifyContent="flex-start"
            leftIcon={<NavigationIcon icon={item.icon} />}
            bg={item.isActive ? activeItemBg : "transparent"}
            color={item.isActive ? activeItemColor : "inherit"}
            _hover={{
              bg: item.isActive ? activeItemBg : hoverBg,
            }}
            aria-current={item.isActive ? "page" : undefined}
            tabIndex={0}
          >
            {item.label}
          </Button>
        ))}
      </VStack>

      <Box p={4} borderTop="1px" borderColor={borderColor}>
        <HStack spacing={3}>
          <Avatar size="sm" name="Lorem Lorem" />
          <Box flex={1}>
            <Text fontSize="sm" fontWeight="medium">
              Lorem
            </Text>
            <Text fontSize="xs" color="gray.500">
              Lorem
            </Text>
          </Box>
          <IconButton aria-label="External link" icon={<ExternalLinkIcon />} size="sm" variant="ghost" />
        </HStack>
      </Box>
    </Box>
  )
}
