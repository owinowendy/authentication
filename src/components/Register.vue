  <template>
    <v-container>
        <v-card>
            <v-card-text>
                <v-form>
                    <v-text-field 
                        v-model="formData.first_name"
                        label="First Name"
                        dense
                        outlined
                    ></v-text-field>
                    <v-text-field 
                        v-model="formData.last_name"
                        label="Last Name"
                        dense
                        outlined
                    ></v-text-field>
                    <v-text-field 
                        v-model="formData.email"
                        label="Email"
                        dense
                        outlined
                    ></v-text-field> 
                    <v-text-field
                v-model="formData.password"
                label="Password"
                define
                outlined>

                </v-text-field>
                <v-text-field
                    v-model="formData.date"
                    label="Date"
                    define
                    outline>
                 </v-text-field>
                   <v-select
                   v-model="formData.select"
                    label="Select"
                    define
                    outline>

                    </v-select> 
                    <v-checkbox
                   v-model="formData.checkbox"
                    label="Checkbox"
                    define
                    outline>do you agree</v-checkbox>
                     
                    <v-btn
                    :disabled="!valid"
                    color="green"
                    class="mr-4"
                   @click ="validate">Validate</v-btn>
                    <v-btn
                    class="mr-4"
                   @click ="reset">Reset </v-btn>
                    <v-btn
                    class="mr-4"
                   @click ="resetvalidation">Resetvalidation </v-btn>

                    
<button @click="say('hello')">say hello</button>

                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name:"Register",
    data: () => ({
        formData: {
            first_name: "",
            last_name:"",
            email:"",
            password:"",
            date:""
        }
    })
                   
}
</script>
<style scoped></style>