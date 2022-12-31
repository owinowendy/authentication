<template>
<v-container>
    <v-card>
        <v-card-text>
            <v-form>
                <v-text-field 
                v-model="formData.email"
               label="Email Address" 
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
    name:"Login",
    data: () =>({
        formData: {
            password:"",
            email:""
        }
    })
}

</script>
<style scoped>

</style>