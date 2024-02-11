import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,
  ModalBody, ModalCloseButton, FormControl, FormLabel,
  Input, Stack, Box, FormErrorMessage,
  Text
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import FontAwesome icons
import useApiForSignUp from '@/hooks/useApiForSignUp';

interface FormData {
  email: string;
  password: string;
  passwordCheck: string;
}

const SignUpModal: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // mutation 객체 생성
  const mutationForSimpleCreateTodo = useApiForSignUp();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // 여기서 회원 가입 처리 로직을 작성할 수 있습니다.

    mutationForSimpleCreateTodo.mutate({
      email: data.email,
      password: data.password
    })

    setIsOpen(false)

  };

  const password = useRef<string | undefined>();
  password.current = watch("password", "");

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box>
      <Button colorScheme="teal" size="sm" px="3" onClick={onOpen}>회원 가입</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>회원 가입</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Stack spacing={4}>
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" {...register("email", { required: "Email을 입력하세요." })} />
                  <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password}>
                  <FormLabel>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Text>비밀번호</Text>
                      <Button onClick={togglePasswordVisibility} size={"sm"}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle between eye and eye-slash icons */}
                      </Button>
                    </Box>
                  </FormLabel>
                  <Input type={showPassword ? "text" : "password"} {...register("password", { required: "비밀번호를 입력하세요.", minLength: { value: 6, message: "비밀번호는 최소 6자 이상이어야 합니다." } })} />
                  <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.passwordCheck || (password.current !== watch("passwordCheck") && !!watch("passwordCheck"))}>
                  <FormLabel>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Text>비밀번호 확인</Text>
                      <Text fontSize={20} textColor={"green.300"}>{password.current.length >= 6 && password.current && password.current === watch("passwordCheck") ? "pass" : ""}</Text>
                    </Box>
                  </FormLabel>
                  <Input type={showPassword ? "text" : "password"} {...register("passwordCheck", { required: "비밀번호를 다시 한 번 입력하세요.", validate: value => value === password.current || "비밀번호가 일치하지 않습니다." })} />
                  <FormErrorMessage>{errors.passwordCheck && errors.passwordCheck.message}</FormErrorMessage>
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="teal" mr={3}>가입</Button>
              <Button onClick={onClose}>닫기</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default SignUpModal;
