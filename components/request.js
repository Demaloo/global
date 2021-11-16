import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	Icon,
	ModalBody,
	Input,
	Box,
	Flex,
	IconButton,
	Stack,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	ModalFooter,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import { sendTelegramMessage } from "lib/telegram";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Request = ({ isOpen, onClose }) => {
	const { handleSubmit, register, formState, reset } = useForm();
	const [loading, setLoading] = useState();
	const toast = useToast();

	async function onSubmit(data) {
		setLoading(true);
		try {
			const name = `Name: ${data.name}%0A`;
			const email = `Email: ${data.email}%0A`;
			const count = `Count: ${data.count}%0A`;
			const message = `Message: ${data.message}%0A`;
			let response = await sendTelegramMessage(
				name + email + count + message
			);
			response = await response.json();
			console.log({ response });
			if (response.ok) {
				toast({
					title: "Request Sent!.",
					description: "We will respond to you as soon as possible.",
					status: "success",
					duration: 9000,
					isClosable: true,
				});
				reset();
				onClose();
			} else {
				throw new Error();
			}
		} catch (err) {
			console.log({ err });
			toast({
				title: "Something went wrong.",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
		} finally {
			setLoading(false);
		}
	}

	const { errors } = formState;

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			size="2xl"
			scrollBehavior="inside"
			// closeOnOverlayClick={false}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					py="3"
					borderBottom="1px solid"
					borderBottomColor="gray.100"
				>
					<Flex justifyContent="flex-end">
						<IconButton
							icon={<Icon as={AiOutlineCloseCircle} boxSize="7" />}
							onClick={onClose}
							variant="unstyled"
							color="gray.600"
						/>
					</Flex>
				</ModalHeader>
				<ModalBody>
					<Box py="10">
						<form onSubmit={handleSubmit(onSubmit)}>
							<Stack spacing="10">
								<FormControl isInvalid={errors.name}>
									<FormLabel
										htmlFor={"name"}
										fontSize="sm"
										color="gray.600"
									>
										Name
									</FormLabel>
									<Input
										id="name"
										size="lg"
										placeholder="John Smith"
										{...register("name", {
											required: "This is required",
										})}
									/>
									<FormErrorMessage>
										{errors.name && errors.name.message}
									</FormErrorMessage>
								</FormControl>

								<FormControl isInvalid={errors.email}>
									<FormLabel
										htmlFor="email"
										fontSize="sm"
										color="gray.600"
									>
										Email
									</FormLabel>
									<Input
										id="email"
										size="lg"
										placeholder="your@email.com"
										{...register("email", {
											required: "This is required",
										})}
									/>
									<FormErrorMessage>
										{errors.email && errors.email.message}
									</FormErrorMessage>
								</FormControl>

								<FormControl isInvalid={errors.count}>
									<FormLabel
										htmlFor={"count"}
										fontSize="sm"
										color="gray.600"
									>
										Number Of People
									</FormLabel>
									<Input
										id="count"
										size="lg"
										placeholder="12"
										{...register("count", {
											required: "This is required",
										})}
									/>
									<FormErrorMessage>
										{errors.count && errors.count.message}
									</FormErrorMessage>
								</FormControl>

								<FormControl isInvalid={errors.message}>
									<FormLabel
										htmlFor={"message"}
										fontSize="sm"
										color="gray.600"
									>
										Message
									</FormLabel>
									<Textarea
										id="message"
										placeholder="I would like to book a trip ..."
										resize="none"
										{...register("message")}
									/>
									<FormErrorMessage>
										{errors.message && errors.message.message}
									</FormErrorMessage>
								</FormControl>

								<Button
									type="submit"
									variant="outline"
									size="lg"
									colorScheme="jashyl"
									isLoading={loading}
									// isDisabled={!isDirty || !isValid}
								>
									Submit
								</Button>
							</Stack>
						</form>
					</Box>
				</ModalBody>
				<ModalFooter
					borderTop="1px solid"
					borderTopColor="gray.100"
				></ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default Request;
