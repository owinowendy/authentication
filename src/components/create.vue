<template>
    <v-container>
        <v-card>
            <v-card-text>
            <v-form>
                <v-text-field
                v-model="formData.first_name"
                label="First Name"
                define
                outlined>

                </v-text-field>
                <v-text-field
                v-model="formData.last_name"
                label="Last Name"
                define
                outlined>

                </v-text-field>
                <v-text-field
                v-model="formData.email"
                label="Email"
                define
                outlined>

                </v-text-field>
                <v-text-field
                v-model="formData.password"
                label="Password"
                define
                outlined>

                </v-text-field>
                

            </v-form>
            </v-card-text>
        </v-card>

    </v-container>

</template>
<script>
    export default{
        name:"create",
        data: ()=>({
            FormData:{
            first_name:"",
            last_name:"",
            email:"",
            Password:""


            }

        })
    }

</script>
<style scoped>

</style>