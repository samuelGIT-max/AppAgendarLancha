import { View,Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import { useForm,Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import * as yup from 'yup'


// const schema = yup.object({
//     username: yup.string().required("Informe seu nome de usuário"),
//     email: yup.string().required("Informe seu E-mail"),
//     password: yup.string().min(6,"A senha deve ter pelo menos 6 dígitos").required("Informe sua senha")
// })

export default function Login() {

    // const { control, handleSubmit, formState: {errors} } = useForm({
    //     resolver: yupResolver(schema)
    // })

    // function handleLogin(data){
    //     console.log("teste")
    //     console.log(data)
    // }

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    function teste(){
        console.log("aaaa")
    }


    return <>
        <Text style={styles.title}>Rolancha</Text>

        <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Nome de usuário ou e-mail"
        />

        <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
        />


        <TouchableOpacity style={styles.button} onPress={teste}>
            <Text style={styles.buttonText}>Fazer Login</Text>
        </TouchableOpacity>    
        {/* <Controller
            control={control}
            name="username"
            render={({ field: {onChange,onBlur,value} }) => (
                <TextInput
                    style={[styles.input,{
                        borderWidth:errors.password && 1, 
                        borderColor:errors.password && '#ff375b'
                    }]}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Seu nome de usuário"
                />
            )}
        />
        {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>} */}

        {/* <Controller
            control={control}
            name="password"
            render={({ field: {onChange,onBlur,value} }) => (
                <TextInput
                    style={[styles.input,{
                        borderWidth:errors.password && 1, 
                        borderColor:errors.password && '#ff375b'
                    }]}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Sua senha"
                />
            )}
        />
        {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>} */}
    </>
}

const styles = StyleSheet.create({

    title: {
        fontSize:34,
        marginBottom:34,
        color:'#121212',
        fontWeight:'bold'
    },

    input: {
        width:'100%',
        height:40,
        backgroundColor: '#fff',
        paddingHorizontal:8,
        marginBottom:8,
        borderRadius:4,
        color:'#121212'
    },  

    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#45d800',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },  

    labelError: {
        alignSelf: 'flex-start',
        color: '#ff375b',
        marginBottom: 8
    }
});