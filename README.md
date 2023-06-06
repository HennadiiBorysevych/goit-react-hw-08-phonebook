<body>
  <h1>Phonebook</h1>

  <h2>Features</h2>
  <ul>
    <li>Create, view, update, and delete contacts</li>
    <li>Search contacts by name or phone number</li>
    <li>Sort contacts alphabetically</li>
    <li>Responsive UI design for mobile and desktop devices</li>
    <li>User authentication and authorization</li>
    <li>Error handling and validation</li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li>HTML, CSS, JavaScript</li>
    <li>React</li>
    <li>Redux</li>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB</li>
    <li>Mongoose</li>
    <li>JWT (JSON Web Tokens)</li>
    <li>bcrypt (Password hashing)</li>
    <li>Axios (HTTP client)</li>
  </ul>

  <h2>Getting Started</h2>
  <ol>
    <li>Clone the repository:<br><code>git clone &lt;repository-url&gt;</code></li>
    <li>Install the dependencies:<br><code>cd &lt;project-folder&gt;<br>npm install</code></li>
    <li>Set up the environment variables:
      <ul>
        <li>Create a <code>.env</code> file in the root directory</li>
        <li>Add the following variables to the <code>.env</code> file:
          <ul>
            <li><code>MONGODB_URI</code>: MongoDB connection string</li>
            <li><code>JWT_SECRET</code>: Secret key for JWT token generation</li>
            <li><code>JWT_EXPIRES_IN</code>: Expiration time for JWT tokens (e.g., "7d" for 7 days)</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Start the development server:<br><code>npm run dev</code></li>
    <li>Open the application in your browser:<br><code>http://localhost:3000</code></li>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li>Sign up for a new account or log in with your existing credentials.</li>
    <li>Once logged in, you will be redirected to the Phonebook dashboard.</li>
    <li>Use the navigation menu to access different sections of the application.</li>
    <li>On the Contacts page, you can view, add, edit, and delete your contacts.</li>
    <li>Use the search bar to search for contacts by name or phone number.</li>
    <li>Click on a contact to view its details and make any necessary updates.</li>
    <li>Contacts are sorted alphabetically by default. Use the sorting options to change the order.</li>
    <li>Log out of your account when you're done using the application.</li>
  </ol>

  <h2>Folder Structure</h2>
  <ul>
    <li><code>client/</code>: Contains the frontend code of the application.</li>
    <li><code>server/</code>: Contains the backend code of the application.</li>
    <li><code>shared/</code>: Contains shared code or configuration files.</li>
  </ul>

  <h2>Contributing</h2>
  <p>Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or
    submit a pull request.</p>

  <h2>License</h2>
  <p>This project is licensed under the MIT License.</p>

  <h2>Acknowledgments</h2>
  <ul>
    <li>UI Design Inspiration: [Provide credit or thanks to any design or inspiration sources]</li>
    <!-- Add any other acknowledgments or credits if necessary -->
  </ul>
</body>
