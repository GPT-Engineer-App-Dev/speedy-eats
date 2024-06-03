import { Container, Box, VStack, Heading, Text, Button, Image, Flex, Icon, HStack, Avatar, Stack } from "@chakra-ui/react";
import { FaUtensils, FaTruck, FaSmile } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="brand.700" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">FoodDelivery</Heading>
        <HStack spacing={8}>
          <Text cursor="pointer">Home</Text>
          <Text cursor="pointer">Menu</Text>
          <Text cursor="pointer">About</Text>
          <Text cursor="pointer">Contact</Text>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bgImage="url('/images/hero-bg.jpg')" bgSize="cover" bgPos="center" color="white" textAlign="center" py={20}>
        <Heading size="2xl" mb={4}>Delicious Food Delivered To You</Heading>
        <Text fontSize="xl" mb={8}>Experience the best food from the comfort of your home</Text>
        <Button size="lg" colorScheme="teal">Order Now</Button>
      </Box>

      {/* Featured Dishes */}
      <Box as="section" py={20} textAlign="center">
        <Heading size="xl" mb={10}>Featured Dishes</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={10}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="/images/dish1.jpg" alt="Dish 1" />
            <Box p={6}>
              <Heading size="md">Dish Name 1</Heading>
              <Text mt={4}>A short description of the dish.</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="/images/dish2.jpg" alt="Dish 2" />
            <Box p={6}>
              <Heading size="md">Dish Name 2</Heading>
              <Text mt={4}>A short description of the dish.</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="/images/dish3.jpg" alt="Dish 3" />
            <Box p={6}>
              <Heading size="md">Dish Name 3</Heading>
              <Text mt={4}>A short description of the dish.</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* How It Works */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="xl" mb={10}>How It Works</Heading>
        <Flex justifyContent="center" spacing={10}>
          <VStack spacing={4} mx={4}>
            <Icon as={FaUtensils} w={10} h={10} color="teal.500" />
            <Heading size="md">Choose Your Meal</Heading>
            <Text>Select from a wide variety of dishes.</Text>
          </VStack>
          <VStack spacing={4} mx={4}>
            <Icon as={FaTruck} w={10} h={10} color="teal.500" />
            <Heading size="md">We Deliver</Heading>
            <Text>Fast and reliable delivery to your doorstep.</Text>
          </VStack>
          <VStack spacing={4} mx={4}>
            <Icon as={FaSmile} w={10} h={10} color="teal.500" />
            <Heading size="md">Enjoy Your Food</Heading>
            <Text>Delicious food, just a click away.</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Testimonials */}
      <Box as="section" py={20} textAlign="center">
        <Heading size="xl" mb={10}>What Our Customers Say</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={10}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} p={6}>
            <Avatar src="/images/customer1.jpg" name="Customer 1" mb={4} />
            <Text>"The food was amazing and the delivery was super fast!"</Text>
            <Text mt={4} fontWeight="bold">- Customer 1</Text>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} p={6}>
            <Avatar src="/images/customer2.jpg" name="Customer 2" mb={4} />
            <Text>"Great service and delicious food. Highly recommend!"</Text>
            <Text mt={4} fontWeight="bold">- Customer 2</Text>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} p={6}>
            <Avatar src="/images/customer3.jpg" name="Customer 3" mb={4} />
            <Text>"A wonderful experience from start to finish."</Text>
            <Text mt={4} fontWeight="bold">- Customer 3</Text>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="brand.700" color="white" py={10} textAlign="center">
        <HStack justifyContent="center" spacing={8} mb={4}>
          <Text cursor="pointer">Facebook</Text>
          <Text cursor="pointer">Twitter</Text>
          <Text cursor="pointer">Instagram</Text>
        </HStack>
        <Text>&copy; 2023 FoodDelivery. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;