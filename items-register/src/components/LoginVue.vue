<script>
export default {
    data() {
        return {
            items: [],
            hasAutenticationToken: false
        }
    },
    mounted() {
        this.handleUserLogged()
    },
    methods: {
        async login() {
            var form = document.getElementById('form');
            var formData = new FormData(form);
            
            const user = formData.get("user");
            const pass = formData.get("pass");

            const query = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    username: user,
                    password: pass
                }),
                headers: { "Content-Type": "application/json" }
            });
            const status = await query.status;

            if (status !== 200) {
                alert("Ocorreu um problema no login!");
                return;
            }

            // status === 200
            const response = await query.json();

            localStorage.setItem("authenticationToken", response.access_token);
            this.hasAutenticationToken = true
        },
        async handleUserLogged() {
            if (!localStorage.getItem('authenticationToken')) {
                return;
            }

            const query = await fetch("http://localhost:3000/auth/profile", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('authenticationToken')}`
                }
            });

            const status = await query.status;

            if (status !== 200) {
                localStorage.removeItem('authenticationToken');
                return this.hasAutenticationToken = false
            }

            return this.hasAutenticationToken = true
        }
    },
}
</script>

<template>
    <main>
        <h1>Login - {{ hasAutenticationToken }}</h1>

        <div v-if="hasAutenticationToken">
            <p>Você já está logado</p>
        </div>

        <div v-else>
            <form id="form" @submit.prevent="login">
                <label htmlFor="user">
                    user:
                    <input name="user" id="user" type="text" />
                </label>

                <br />

                <label htmlFor="pass">
                    pass:
                    <input name="pass" id="pass" type="text" />
                </label>

                <br />

                <button type="submit">Logar</button>
            </form>
        </div>
    </main>
</template>

<style scoped></style>