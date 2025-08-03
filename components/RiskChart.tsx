
"use client"

import { Box, Text, useColorModeValue } from "@chakra-ui/react"

interface RiskChartProps {
  critical: number
  total: number
}

export function RiskChart({ critical, total }: RiskChartProps) {
  const strokeColor = useColorModeValue("red.500", "red.400")
  const bgColor = useColorModeValue("gray.100", "gray.700")

  const percentage = total > 0 ? (critical / total) * 100 : 0
  const circumference = 2 * Math.PI * 45 // radius = 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <Box position="relative" w="100px" h="100px">
      <svg width="100" height="100" style={{ transform: "rotate(-90deg)" }}>
        {/* Background circle */}
        <circle cx="50" cy="50" r="45" stroke={bgColor} strokeWidth="8" fill="transparent" />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke={strokeColor}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.5s ease-in-out",
          }}
        />
      </svg>

      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" color={strokeColor}>
          {critical}
        </Text>
      </Box>
    </Box>
  )
}
