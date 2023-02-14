import {
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Input,
    Stack, Button, Box, Card, Image, CardBody, CardFooter, Heading, Text,
    Divider, ButtonGroup
} from '@chakra-ui/react';
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import Cookies from "universal-cookie";
import NavBar from '../NavBar/NavBar';

function Login(props) {

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    const [input, setInput] = useState({
        email: "",
        user_password: ""
    });

    const [errorInput, setErrorInput] = useState("");
    const [errorUser, setErrorUser] = useState("");

    var arrayDataApi = [{ first_name: "felipe", email: "felipe@gmail.com" },
    { first_name: "tobias", email: "tobias@gmail.com" },
    { first_name: "enrique", email: "enrique@gmail.com" },
    { first_name: "estanislao", email: "estanislao@gmail.com" },
    { first_name: "nicolas", email: "nicolas@gmail.com" },
    { first_name: "juan manuel", email: "juan.manuel@gmail.com" },
    { first_name: "lucia", email: "lucia@gmail.com" },
    { first_name: "maria", email: "maria@gmail.com" },
    { first_name: "bolo", email: "bolo@gmail.com" },
    { first_name: "mechi", email: "mechi@gmail.com" },
    ];

    console.log(arrayDataApi);

    const handleInputChange = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        console.log(input)

    };

    const handeleSubmit = (e) => {

        if (!errorEMsuccessful || !errorPsuccessful) {
            setErrorInput("error")
        } else {

            let userApi = arrayDataApi.find(u => u.email === input.email);

            console.log(userApi);

            if (userApi) {

                const coockie = new Cookies();
                coockie.set("nombreUsuario", `${userApi.first_name}`, { path: "/" });
                coockie.set("emailUsuario", `${userApi.email}`, { path: "/" });

                window.location.reload()

            } else {

                setErrorUser("error")

            }

        }

    };

    const handleLogout = (e) => {

        console.log(document.cookie);

        document.cookie.split(";").forEach((c) => {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });

        window.location.reload()

    };

    var errorEmail = "";
    var errorEMsuccessful = "";

    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (expReg.test(input.email)) {
        errorEMsuccessful = "error";
    } else if (input.email) {
        errorEmail = "error"
    } else {
        errorEmail = "";
        errorEMsuccessful = "";
    };

    var errorPassword = "";
    var errorPsuccessful = "";

    if (input.user_password) {

        if (input.user_password) {

            var number = input.user_password.length - 1;
            console.log(number);

            if (isNaN(input.user_password[0])) {
                errorPassword = "error";
            } else if (isNaN(input.user_password[number])) {
                errorPassword = "error";
            } else if (input.user_password.length < 10) {
                errorPassword = "error";
            } else {
                errorPsuccessful = "error";
            }
        }
    };


    if (isLoading) {
        return (
            <div>

                <NavBar />

                <div>Loading...</div>

            </div>
        )
    } else if (isAuthenticated) {

        console.log(user);

        return (

            <div>

                <NavBar />

                <Box
                    borderWidth="1px"
                    rounded="lg"
                    shadow="1px 1px 3px rgba(0,0,0,0.3)"
                    maxWidth={800}
                    p={6}
                    m="10px auto"
                    as="form"
                >

                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                src={user.picture}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{user.name}</Heading>
                                <Text>
                                    On behalf of Ibera Hotels, we want to thank you immensely for the decision to purchase our services
                                    for your stay and we are delighted to be able to collaborate with its development.
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    {user.email}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'
                                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    Log out
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>

                </Box>

            </div>

        )

    } else if (document.cookie) {

        const cookies = new Cookies();

        console.log(user);

        console.log(document.cookie);

        return (

            <div>

                <NavBar />

                <Box
                    borderWidth="1px"
                    rounded="lg"
                    shadow="1px 1px 3px rgba(0,0,0,0.3)"
                    maxWidth={800}
                    p={6}
                    m="10px auto"
                    as="form"
                >

                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                src="https://www.shutterstock.com/image-vector/avatar-profile-icon-vector-social-260nw-1906554358.jpg"
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{cookies.get("nombreUsuario")}</Heading>
                                <Text>
                                    On behalf of Ibera Hotels, we want to thank you immensely for the decision to purchase our services
                                    for your stay and we are delighted to be able to collaborate with its development.
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    {cookies.get("emailUsuario")}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'
                                    onClick={handleLogout}
                                >
                                    Log out
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>

                </Box>

            </div>

        )

    } else {

        return (

            <div>

                <NavBar />

                <Box
                    borderWidth="1px"
                    rounded="lg"
                    shadow="1px 1px 3px rgba(0,0,0,0.3)"
                    maxWidth={800}
                    p={6}
                    m="10px auto"
                    as="form"
                >

                    <div>

                        <FacebookLoginButton onClick={() => loginWithRedirect()}></FacebookLoginButton>

                        <br></br>

                        <GoogleLoginButton onClick={() => loginWithRedirect()}></GoogleLoginButton>

                    </div>

                    <div>

                        <FormControl>

                            <FormLabel>Email</FormLabel>
                            <Input type='text' value={input.email} name="email" onChange={handleInputChange} borderWidth='3px' />
                            {!errorEmail && !errorEMsuccessful ? (
                                <FormHelperText>
                                    Complete email.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage></FormErrorMessage>
                            )}
                            {errorEmail && !errorEMsuccessful ? (
                                <FormHelperText color="blue">
                                    email@example.com
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage></FormErrorMessage>
                            )}
                            {errorEMsuccessful ? (
                                <FormHelperText color="red" className="letter" fontWeight='bold'>
                                    Successful
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage></FormErrorMessage>
                            )}

                            <FormLabel>Password</FormLabel>
                            <Input type='password' value={input.user_password} name="user_password" onChange={handleInputChange} borderWidth='3px' />
                            {!errorPassword && !errorPsuccessful ? (
                                <FormHelperText>
                                    Complete Password.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage></FormErrorMessage>
                            )}
                            {errorPassword && !errorPsuccessful ? (
                                <FormHelperText color="blue">
                                    Error: Password should start and finish with number.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage></FormErrorMessage>
                            )}
                            {errorPassword && !errorPsuccessful ? (
                                <FormHelperText color="blue">
                                    Error: Password must have 10 characters.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage></FormErrorMessage>
                            )}
                            {errorPsuccessful ? (
                                <FormHelperText color="red" className="letter" fontWeight='bold'>
                                    Successful
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage></FormErrorMessage>
                            )}

                        </FormControl>

                    </div>

                    <div>

                        <FormControl>

                            {errorInput ? (
                                <FormHelperText color="green" className="letter">
                                    Error in any of the data provided.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage></FormErrorMessage>
                            )}

                            {errorUser ? (
                                <FormHelperText color="green" className="letter">
                                    User does not exist.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage></FormErrorMessage>
                            )}

                        </FormControl>

                    </div>

                    <div>

                        <Stack direction='row' spacing={4} align='center'>
                            <Button colorScheme='teal' variant='solid' onClick={handeleSubmit}>
                                Log in
                            </Button>
                        </Stack>

                    </div>

                </Box>

            </div>

        )

    }

};

export default Login;