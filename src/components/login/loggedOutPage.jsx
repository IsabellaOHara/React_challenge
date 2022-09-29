const LoggedOutPage = () => {
   
   return (
        <div>
            <header className="Page-header">
                <h3>Sign in to your Bella Ltd account here</h3>
            </header>
            <form>
                <label for="username"> Username: </label>
                <input type="text" name="username" placeholder="Username"></input>
                <br />
                <label for="password"> Password: </label>
                <input type="password" name="password" placeholder="Password"></input>
                <br />
            </form>
        </div>
   )

}

export default LoggedOutPage;