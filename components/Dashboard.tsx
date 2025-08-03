"use client"

import { Box, Flex, useColorModeValue } from "@chakra-ui/react"
import { Sidebar } from "./Sidebar"
import { MainContent } from "./MainContent"
import { RightPanel } from "./RightPanel"

export function Dashboard() {
  const bgColor = useColorModeValue("gray.50", "gray.900")

  return (
    <Box minH="100vh" bg={bgColor}>
      <Flex h="100vh">
        <Sidebar />
        <MainContent />
        <RightPanel />
      </Flex>
    </Box>
  )
}
