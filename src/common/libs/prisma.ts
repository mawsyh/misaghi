import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  const globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  prisma = globalWithPrisma.prisma;
}

async function main() {
  const newUser = await prisma.contentMeta.createMany({
    data: [
      {
        id: 455,
        date: '2023-11-13T18:19:43',
        date_gmt: '2023-11-13T18:19:43',
        guid: {
          rendered: 'https://blog-api.aulianza.id/?p=455',
        },
        modified: '2023-11-13T18:23:30',
        modified_gmt: '2023-11-13T18:23:30',
        slug: 'web-storage-localstorage-sessionstorage-and-cookies',
        status: 'publish',
        type: 'post',
        link: 'https://blog-api.aulianza.id/web-storage-localstorage-sessionstorage-and-cookies/',
        title: {
          rendered: 'Web Storage: localStorage, sessionStorage, and Cookies',
        },
        content: {
          rendered:
            '<p>When it comes to building cool stuff on the web, managing data is like having superpowers. There are three cool tools - <code>localStorage</code>, <code>sessionStorage</code>, and <code>cookies</code> - that help web developers do just that. In this guide, I\'ll take a peek into what makes each of them special, what they\'re good at, and where they might stumble a bit.</p>\n<blockquote>\n<p>localStorage</p>\n</blockquote>\n<p><code>localStorage</code> is a reliable storage option that allows us to store key-value pairs in a user\'s browser for an extended period.</p>\n<h4>Pros:</h4>\n<ul>\n<li><strong>Persistence</strong>: Data persists even when the user closes and reopens the browser.</li>\n<li><strong>Ample Storage</strong>: Provides a generous storage space (around 5MB), making it suitable for larger amounts of data.</li>\n<li><strong>Simplicity</strong>: User-friendly API, making it easy to implement.</li>\n</ul>\n<h4>Cons:</h4>\n<ul>\n<li><strong>Single Domain Limitation</strong>: Data is limited to the domain that created it.</li>\n<li><strong>Security Concerns</strong>: Vulnerable to Cross-Site Scripting (XSS) attacks.</li>\n</ul>\n<h4>Example:</h4>\n<pre><code class="language-javascript">// Storing data in localStorage\nlocalStorage.setItem(&#039;username&#039;, &#039;JohnDoe&#039;);\n\n// Retrieving data from localStorage\nconst username = localStorage.getItem(&#039;username&#039;);\nconsole.log(username); // Output: JohnDoe\n</code></pre>\n<blockquote>\n<p>sessionStorage</p>\n</blockquote>\n<p><code>sessionStorage</code> is similar to localStorage but with a shorter lifespan, suitable for storing data for the duration of a user\'s visit to a specific page.</p>\n<h4>Pros:</h4>\n<ul>\n<li><strong>Session-Based</strong>: Data is only available for the duration of the page session.</li>\n<li><strong>Isolation</strong>: Each page/tab gets its own sessionStorage, preventing data conflicts between tabs.</li>\n<li><strong>No Persistence Overhead</strong>: Data is automatically cleared when the session ends.</li>\n</ul>\n<h4>Cons:</h4>\n<ul>\n<li><strong>Limited Lifespan</strong>: Data is lost when the user closes the tab or browser.</li>\n<li><strong>Single Domain Limitation</strong>: Similar to localStorage, it is limited to the domain.</li>\n</ul>\n<h4>Example:</h4>\n<pre><code class="language-javascript">// Storing data in sessionStorage\nsessionStorage.setItem(&#039;language&#039;, &#039;JavaScript&#039;);\n\n// Retrieving data from sessionStorage\nconst language = sessionStorage.getItem(&#039;language&#039;);\nconsole.log(language); // Output: JavaScript\n</code></pre>\n<blockquote>\n<p>Cookies</p>\n</blockquote>\n<p><code>Cookies</code> are small pieces of data stored on a user\'s device, accessible by both the server and client.</p>\n<h4>Pros:</h4>\n<ul>\n<li><strong>Cross-Domain Availability</strong>: Can be accessed by different domains, facilitating data sharing.</li>\n<li><strong>Versatility</strong>: Can store various data types, not just strings.</li>\n<li><strong>Expiration Control</strong>: Can set expiration times for data.</li>\n</ul>\n<h4>Cons:</h4>\n<ul>\n<li><strong>Size Limitations</strong>: Limited to around 4KB of data per cookie.</li>\n<li><strong>Performance Overhead</strong>: Adds a bit of overhead to each HTTP request.</li>\n<li><strong>Security Risks</strong>: Vulnerable to Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) attacks.</li>\n</ul>\n<h3>Example:</h3>\n<pre><code class="language-javascript">// Setting a cookie\ndocument.cookie = &#039;theme=light; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/&#039;;\n\n// Retrieving cookies\nconst cookies = document.cookie;\nconsole.log(cookies); // Output: theme=light\n</code></pre>\n<blockquote>\n<p>Choosing the Right Tool for the Job</p>\n</blockquote>\n<h4>Factors to Consider:</h4>\n<ul>\n<li><strong>Data Size</strong>: For larger amounts of data, localStorage might be a better fit.</li>\n<li><strong>Data Lifespan</strong>: If data needs to persist across different pages or tabs, consider localStorage or cookies. For shorter durations, use sessionStorage.</li>\n<li><strong>Cross-Domain Requirements</strong>: If your application involves data sharing across different domains, cookies are the go-to solution.</li>\n</ul>\n',
          protected: false,
          markdown:
            "When it comes to building cool stuff on the web, managing data is like having superpowers. There are three cool tools - `localStorage`, `sessionStorage`, and `cookies` - that help web developers do just that. In this guide, I'll take a peek into what makes each of them special, what they're good at, and where they might stumble a bit.\r\n\r\n> localStorage\r\n\r\n`localStorage` is a reliable storage option that allows us to store key-value pairs in a user's browser for an extended period.\r\n\r\n#### Pros:\r\n- **Persistence**: Data persists even when the user closes and reopens the browser.\r\n- **Ample Storage**: Provides a generous storage space (around 5MB), making it suitable for larger amounts of data.\r\n- **Simplicity**: User-friendly API, making it easy to implement.\r\n\r\n#### Cons:\r\n- **Single Domain Limitation**: Data is limited to the domain that created it.\r\n- **Security Concerns**: Vulnerable to Cross-Site Scripting (XSS) attacks.\r\n\r\n#### Example:\r\n```javascript\r\n// Storing data in localStorage\r\nlocalStorage.setItem('username', 'JohnDoe');\r\n\r\n// Retrieving data from localStorage\r\nconst username = localStorage.getItem('username');\r\nconsole.log(username); // Output: JohnDoe\r\n\r\n```\r\n\r\n> sessionStorage\r\n\r\n`sessionStorage` is similar to localStorage but with a shorter lifespan, suitable for storing data for the duration of a user's visit to a specific page.\r\n\r\n#### Pros:\r\n- **Session-Based**: Data is only available for the duration of the page session.\r\n- **Isolation**: Each page/tab gets its own sessionStorage, preventing data conflicts between tabs.\r\n- **No Persistence Overhead**: Data is automatically cleared when the session ends.\r\n\r\n#### Cons:\r\n- **Limited Lifespan**: Data is lost when the user closes the tab or browser.\r\n- **Single Domain Limitation**: Similar to localStorage, it is limited to the domain.\r\n\r\n#### Example:\r\n\r\n```javascript\r\n// Storing data in sessionStorage\r\nsessionStorage.setItem('language', 'JavaScript');\r\n\r\n// Retrieving data from sessionStorage\r\nconst language = sessionStorage.getItem('language');\r\nconsole.log(language); // Output: JavaScript\r\n\r\n```\r\n\r\n> Cookies\r\n\r\n`Cookies` are small pieces of data stored on a user's device, accessible by both the server and client.\r\n\r\n#### Pros:\r\n- **Cross-Domain Availability**: Can be accessed by different domains, facilitating data sharing.\r\n- **Versatility**: Can store various data types, not just strings.\r\n- **Expiration Control**: Can set expiration times for data.\r\n\r\n#### Cons:\r\n- **Size Limitations**: Limited to around 4KB of data per cookie.\r\n- **Performance Overhead**: Adds a bit of overhead to each HTTP request.\r\n- **Security Risks**: Vulnerable to Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) attacks.\r\n\r\n### Example:\r\n```javascript\r\n// Setting a cookie\r\ndocument.cookie = 'theme=light; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/';\r\n\r\n// Retrieving cookies\r\nconst cookies = document.cookie;\r\nconsole.log(cookies); // Output: theme=light\r\n\r\n```\r\n\r\n> Choosing the Right Tool for the Job\r\n\r\n#### Factors to Consider:\r\n\r\n- **Data Size**: For larger amounts of data, localStorage might be a better fit.\r\n- **Data Lifespan**: If data needs to persist across different pages or tabs, consider localStorage or cookies. For shorter durations, use sessionStorage.\r\n- **Cross-Domain Requirements**: If your application involves data sharing across different domains, cookies are the go-to solution.\r\n",
        },
        excerpt: {
          rendered:
            '<p>When it comes to building cool stuff on the web, managing data is like having superpowers. There are three cool tools &#8211; localStorage, sessionStorage, and cookies &#8211; that help web developers do just that. In this guide, I&#8217;ll take a peek into what makes each of them special, what they&#8217;re good at, and where they [&hellip;]</p>\n',
          protected: false,
        },
        author: 1,
        featured_media: 469,
        comment_status: 'open',
        ping_status: 'open',
        sticky: false,
        template: '',
        format: 'standard',
        meta: {
          footnotes: '',
        },
        categories: [11, 17],
        tags: [18, 19],
        tags_list: [
          {
            term_id: 18,
            name: 'javascript',
            slug: 'javascript',
            term_group: 0,
            term_taxonomy_id: 18,
            taxonomy: 'post_tag',
            description: '',
            parent: 0,
            count: 1,
            filter: 'raw',
          },
          {
            term_id: 19,
            name: 'storage',
            slug: 'storage',
            term_group: 0,
            term_taxonomy_id: 19,
            taxonomy: 'post_tag',
            description: '',
            parent: 0,
            count: 1,
            filter: 'raw',
          },
        ],
        featured_image_url:
          'https://blog-api.aulianza.id/wp-content/uploads/2023/11/storage-scaled.webp',
        _links: {
          self: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/455',
            },
          ],
          collection: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts',
            },
          ],
          about: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/types/post',
            },
          ],
          author: [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/users/1',
            },
          ],
          replies: [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/comments?post=455',
            },
          ],
          'version-history': [
            {
              count: 3,
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/455/revisions',
            },
          ],
          'predecessor-version': [
            {
              id: 485,
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/455/revisions/485',
            },
          ],
          'wp:featuredmedia': [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/media/469',
            },
          ],
          'wp:attachment': [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/media?parent=455',
            },
          ],
          'wp:term': [
            {
              taxonomy: 'category',
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/categories?post=455',
            },
            {
              taxonomy: 'post_tag',
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/tags?post=455',
            },
          ],
          curies: [
            {
              name: 'wp',
              href: 'https://api.w.org/{rel}',
              templated: true,
            },
          ],
        },
        total_views_count: 285,
      },
      {
        id: 19,
        date: '2023-06-23T03:49:26',
        date_gmt: '2023-06-23T03:49:26',
        guid: {
          rendered: 'https://blog-api.aulianza.id/?p=19',
        },
        modified: '2023-11-13T18:44:55',
        modified_gmt: '2023-11-13T18:44:55',
        slug: 'react-with-typescript-10-pro-tips-to-supercharge-your-code',
        status: 'publish',
        type: 'post',
        link: 'https://blog-api.aulianza.id/react-with-typescript-10-pro-tips-to-supercharge-your-code/',
        title: {
          rendered:
            'React with TypeScript: 10 Pro Tips to Supercharge Your Code',
        },
        content: {
          rendered:
            "<p>React and TypeScript are a powerful combination for building robust and scalable web applications. While React provides a flexible and efficient UI development framework, TypeScript adds static typing and enhances the development experience. In this article, we will explore ten essential tips that can help beginners improve their React TypeScript code. Each tip will be accompanied by a code example and a detailed explanation to ensure a clear understanding. Let's dive in!</p>\n<h3>1. Define PropTypes with TypeScript's type annotations</h3>\n<p>When using React with TypeScript, we can leverage type annotations to define prop types. This improves code readability, catches potential bugs, and enhances the development experience. Instead of using the PropTypes library, we can declare prop types directly in the component's interface or type definition. Here's an example:</p>\n<pre><code class=\"language-tsx\">interface MyComponentProps {\n  name: string;\n  age: number;\n}\n\nconst MyComponent: React.FC&lt;MyComponentProps&gt; = ({ name, age }) =&gt; {\n  // Component implementation\n};\n</code></pre>\n<h3>2. Utilize React.FC for functional components</h3>\n<p>The React.FC type is a generic type provided by TypeScript that includes default prop types and children. Using it for functional components allows us to access these properties without explicitly defining them. Here's an example:</p>\n<pre><code class=\"language-tsx\">interface MyComponentProps {\n  name: string;\n}\n\nconst MyComponent: React.FC&lt;MyComponentProps&gt; = ({ name, children }) =&gt; {\n  // Component implementation\n};\n</code></pre>\n<h3>3. Leverage TypeScript's Enum for improved type safety</h3>\n<p>Enums in TypeScript are a great way to define a set of named values. Utilizing enums in React TypeScript code enhances type safety by restricting the possible values for certain props or variables. Here's an example:</p>\n<pre><code class=\"language-tsx\">enum ButtonSize {\n  SMALL = &#039;small&#039;,\n  MEDIUM = &#039;medium&#039;,\n  LARGE = &#039;large&#039;,\n}\n\ninterface ButtonProps {\n  size: ButtonSize;\n}\n\nconst Button: React.FC&lt;ButtonProps&gt; = ({ size }) =&gt; {\n  // Component implementation\n};\n</code></pre>\n<h3>4. Use TypeScript's Union Types for flexible prop values</h3>\n<p>Union Types in TypeScript allow us to specify that a prop can have multiple accepted types. This flexibility is particularly useful when a component prop can accept different data types. Here's an example:</p>\n<pre><code class=\"language-tsx\">interface MessageProps {\n  text: string | number;\n}\n\nconst Message: React.FC&lt;MessageProps&gt; = ({ text }) =&gt; {\n  // Component implementation\n};\n</code></pre>\n<h3>5. Take advantage of React's useRef with TypeScript</h3>\n<p>React's useRef hook is commonly used to reference DOM elements or store mutable values. When using useRef with TypeScript, we can specify the type of the referenced value, reducing the chances of type errors. Here's an example:</p>\n<pre><code class=\"language-tsx\">const MyComponent: React.FC = () =&gt; {\n  const inputRef = useRef&lt;HTMLInputElement&gt;(null);\n\n  // Component implementation\n};\n</code></pre>\n<h3>6. Use TypeScript's Partial type for optional props</h3>\n<p>In React components, some props may be optional, meaning they don't have to be provided by the parent component. TypeScript's Partial type allows us to define props that are not required. Here's an example:</p>\n<pre><code class=\"language-tsx\">interface MyComponentProps {\n  name: string;\n  age?: number;\n}\n\nconst MyComponent: React.FC&lt;MyComponentProps&gt; = ({ name, age }) =&gt; {\n  // Component implementation\n};\n</code></pre>\n<h3>7. Apply TypeScript's Non-Nullable type for stricter null checks</h3>\n<p>In TypeScript, the Non-Nullable type can be used to ensure that a variable or prop is not null or undefined. This helps catch potential errors caused by null values. Here's an example:</p>\n<pre><code class=\"language-tsx\">interface MyComponentProps {\n  name: string;\n  age: number | null;\n}\n\nconst MyComponent: React.FC&lt;MyComponentProps&gt; = ({ name, age }) =&gt; {\n  // Component implementation\n};\n</code></pre>\n<h3>8. Utilize TypeScript's Omit or Pick for prop manipulation</h3>\n<p>TypeScript provides the Omit and Pick utility types for manipulating existing types. Omit allows us to exclude specific properties, while Pick allows us to select specific properties from a type. Here are examples of each:</p>\n<pre><code class=\"language-tsx\">interface OriginalProps {\n  name: string;\n  age: number;\n  email: string;\n}\n\ntype ModifiedProps = Omit&lt;OriginalProps, &#039;age&#039;&gt;; // Excluding the &#039;age&#039; property\n\ntype NewProps = Pick&lt;OriginalProps, &#039;name&#039;&gt;; // Selecting only the &#039;name&#039; property\n</code></pre>\n<h3>9. Leverage TypeScript's Readonly modifier for immutability</h3>\n<p>To enforce immutability, TypeScript provides the Readonly modifier, which makes object properties read-only. This can prevent accidental modification of props or state within a component. Here's an example:</p>\n<pre><code class=\"language-tsx\">interface MyComponentProps {\n  readonly name: string;\n  readonly age: number;\n}\n\nconst MyComponent: React.FC&lt;MyComponentProps&gt; = ({ name, age }) =&gt; {\n  // Component implementation\n};\n</code></pre>\n<h3>10. Use TypeScript's Type Assertions for more flexibility</h3>\n<p>TypeScript's Type Assertions allow us to override the inferred type and provide a specific type for a variable or prop. While type assertions should be used with caution, they can be useful in certain scenarios. Here's an example:</p>\n<pre><code class=\"language-tsx\">interface MyComponentProps {\n  name: string;\n}\n\nconst MyComponent: React.FC = ({ name }: MyComponentProps) =&gt; {\n  const length = (name as string).length; // Type assertion to ensure name is treated as a string\n\n  // Component implementation\n};\n</code></pre>\n<p>These ten tips provide beginner React TypeScript developers with valuable insights to enhance their code quality and development experience. By leveraging TypeScript's static typing and advanced features, we can write more robust and maintainable React applications. Incorporate these tips into your projects and witness immediate improvements in your code. Happy coding!</p>\n",
          protected: false,
          markdown:
            "React and TypeScript are a powerful combination for building robust and scalable web applications. While React provides a flexible and efficient UI development framework, TypeScript adds static typing and enhances the development experience. In this article, we will explore ten essential tips that can help beginners improve their React TypeScript code. Each tip will be accompanied by a code example and a detailed explanation to ensure a clear understanding. Let's dive in!\r\n\r\n### 1. Define PropTypes with TypeScript's type annotations\r\n\r\nWhen using React with TypeScript, we can leverage type annotations to define prop types. This improves code readability, catches potential bugs, and enhances the development experience. Instead of using the PropTypes library, we can declare prop types directly in the component's interface or type definition. Here's an example:\r\n\r\n```tsx\r\ninterface MyComponentProps {\r\n  name: string;\r\n  age: number;\r\n}\r\n\r\nconst MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {\r\n  // Component implementation\r\n};\r\n\r\n```\r\n\r\n### 2. Utilize React.FC for functional components\r\n\r\nThe React.FC type is a generic type provided by TypeScript that includes default prop types and children. Using it for functional components allows us to access these properties without explicitly defining them. Here's an example:\r\n\r\n```tsx\r\ninterface MyComponentProps {\r\n  name: string;\r\n}\r\n\r\nconst MyComponent: React.FC<MyComponentProps> = ({ name, children }) => {\r\n  // Component implementation\r\n};\r\n\r\n```\r\n\r\n### 3. Leverage TypeScript's Enum for improved type safety\r\n\r\nEnums in TypeScript are a great way to define a set of named values. Utilizing enums in React TypeScript code enhances type safety by restricting the possible values for certain props or variables. Here's an example:\r\n\r\n```tsx\r\nenum ButtonSize {\r\n  SMALL = 'small',\r\n  MEDIUM = 'medium',\r\n  LARGE = 'large',\r\n}\r\n\r\ninterface ButtonProps {\r\n  size: ButtonSize;\r\n}\r\n\r\nconst Button: React.FC<ButtonProps> = ({ size }) => {\r\n  // Component implementation\r\n};\r\n\r\n```\r\n\r\n### 4. Use TypeScript's Union Types for flexible prop values\r\n\r\nUnion Types in TypeScript allow us to specify that a prop can have multiple accepted types. This flexibility is particularly useful when a component prop can accept different data types. Here's an example:\r\n\r\n```tsx\r\ninterface MessageProps {\r\n  text: string | number;\r\n}\r\n\r\nconst Message: React.FC<MessageProps> = ({ text }) => {\r\n  // Component implementation\r\n};\r\n\r\n```\r\n\r\n### 5. Take advantage of React's useRef with TypeScript\r\n\r\nReact's useRef hook is commonly used to reference DOM elements or store mutable values. When using useRef with TypeScript, we can specify the type of the referenced value, reducing the chances of type errors. Here's an example:\r\n\r\n```tsx\r\nconst MyComponent: React.FC = () => {\r\n  const inputRef = useRef<HTMLInputElement>(null);\r\n\r\n  // Component implementation\r\n};\r\n\r\n```\r\n\r\n### 6. Use TypeScript's Partial type for optional props\r\n\r\nIn React components, some props may be optional, meaning they don't have to be provided by the parent component. TypeScript's Partial type allows us to define props that are not required. Here's an example:\r\n\r\n```tsx\r\ninterface MyComponentProps {\r\n  name: string;\r\n  age?: number;\r\n}\r\n\r\nconst MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {\r\n  // Component implementation\r\n};\r\n\r\n```\r\n\r\n### 7. Apply TypeScript's Non-Nullable type for stricter null checks\r\n\r\nIn TypeScript, the Non-Nullable type can be used to ensure that a variable or prop is not null or undefined. This helps catch potential errors caused by null values. Here's an example:\r\n\r\n```tsx\r\ninterface MyComponentProps {\r\n  name: string;\r\n  age: number | null;\r\n}\r\n\r\nconst MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {\r\n  // Component implementation\r\n};\r\n\r\n```\r\n\r\n### 8. Utilize TypeScript's Omit or Pick for prop manipulation\r\n\r\nTypeScript provides the Omit and Pick utility types for manipulating existing types. Omit allows us to exclude specific properties, while Pick allows us to select specific properties from a type. Here are examples of each:\r\n\r\n```tsx\r\ninterface OriginalProps {\r\n  name: string;\r\n  age: number;\r\n  email: string;\r\n}\r\n\r\ntype ModifiedProps = Omit<OriginalProps, 'age'>; // Excluding the 'age' property\r\n\r\ntype NewProps = Pick<OriginalProps, 'name'>; // Selecting only the 'name' property\r\n\r\n```\r\n\r\n### 9. Leverage TypeScript's Readonly modifier for immutability\r\n\r\nTo enforce immutability, TypeScript provides the Readonly modifier, which makes object properties read-only. This can prevent accidental modification of props or state within a component. Here's an example:\r\n\r\n```tsx\r\ninterface MyComponentProps {\r\n  readonly name: string;\r\n  readonly age: number;\r\n}\r\n\r\nconst MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {\r\n  // Component implementation\r\n};\r\n\r\n```\r\n\r\n### 10. Use TypeScript's Type Assertions for more flexibility\r\n\r\nTypeScript's Type Assertions allow us to override the inferred type and provide a specific type for a variable or prop. While type assertions should be used with caution, they can be useful in certain scenarios. Here's an example:\r\n\r\n```tsx\r\ninterface MyComponentProps {\r\n  name: string;\r\n}\r\n\r\nconst MyComponent: React.FC = ({ name }: MyComponentProps) => {\r\n  const length = (name as string).length; // Type assertion to ensure name is treated as a string\r\n\r\n  // Component implementation\r\n};\r\n\r\n```\r\n\r\nThese ten tips provide beginner React TypeScript developers with valuable insights to enhance their code quality and development experience. By leveraging TypeScript's static typing and advanced features, we can write more robust and maintainable React applications. Incorporate these tips into your projects and witness immediate improvements in your code. Happy coding!",
        },
        excerpt: {
          rendered:
            '<p>React and TypeScript are a powerful combination for building robust and scalable web applications. While React provides a flexible and efficient UI development framework, TypeScript adds static typing and enhances the development experience. In this article, we will explore ten essential tips that can help beginners improve their React TypeScript code. Each tip will be [&hellip;]</p>\n',
          protected: false,
        },
        author: 1,
        featured_media: 523,
        comment_status: 'open',
        ping_status: 'open',
        sticky: false,
        template: '',
        format: 'standard',
        meta: {
          footnotes: '',
        },
        categories: [11, 4],
        tags: [5, 6],
        tags_list: [
          {
            term_id: 5,
            name: 'react',
            slug: 'react',
            term_group: 0,
            term_taxonomy_id: 5,
            taxonomy: 'post_tag',
            description: '',
            parent: 0,
            count: 3,
            filter: 'raw',
          },
          {
            term_id: 6,
            name: 'typescript',
            slug: 'typescript',
            term_group: 0,
            term_taxonomy_id: 6,
            taxonomy: 'post_tag',
            description: '',
            parent: 0,
            count: 2,
            filter: 'raw',
          },
        ],
        featured_image_url:
          'https://blog-api.aulianza.id/wp-content/uploads/2023/06/typescript.webp',
        _links: {
          self: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/19',
            },
          ],
          collection: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts',
            },
          ],
          about: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/types/post',
            },
          ],
          author: [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/users/1',
            },
          ],
          replies: [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/comments?post=19',
            },
          ],
          'version-history': [
            {
              count: 1,
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/19/revisions',
            },
          ],
          'predecessor-version': [
            {
              id: 20,
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/19/revisions/20',
            },
          ],
          'wp:featuredmedia': [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/media/523',
            },
          ],
          'wp:attachment': [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/media?parent=19',
            },
          ],
          'wp:term': [
            {
              taxonomy: 'category',
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/categories?post=19',
            },
            {
              taxonomy: 'post_tag',
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/tags?post=19',
            },
          ],
          curies: [
            {
              name: 'wp',
              href: 'https://api.w.org/{rel}',
              templated: true,
            },
          ],
        },
        total_views_count: 1540,
      },
      {
        id: 25,
        date: '2023-06-22T03:49:20',
        date_gmt: '2023-06-22T03:49:20',
        guid: {
          rendered: 'https://blog-api.aulianza.id/?p=25',
        },
        modified: '2023-11-13T18:44:33',
        modified_gmt: '2023-11-13T18:44:33',
        slug: '10-tricks-to-write-super-clean-code-in-typescript',
        status: 'publish',
        type: 'post',
        link: 'https://blog-api.aulianza.id/10-tricks-to-write-super-clean-code-in-typescript/',
        title: {
          rendered: '10 Tricks to Write Super Clean Code in TypeScript',
        },
        content: {
          rendered:
            '<p>Writing clean and maintainable code is essential for any developer, regardless of their level of expertise. Clean code improves readability, enhances collaboration, and makes debugging easier. In the context of TypeScript, a statically-typed superset of JavaScript, clean code becomes even more important to take full advantage of the language\'s features. Whether you are a beginner or looking to improve your TypeScript skills, here are 10 tricks, along with examples, to help you write super clean code.</p>\n<h3>1. Use Descriptive Variable and Function Names:</h3>\n<pre><code class="language-tsx">// Bad example\nconst x = 5;\nconst y = 10;\n\nfunction fn(a: number, b: number): number {\n  return a + b;\n}\n\n// Good example\nconst width = 5;\nconst height = 10;\n\nfunction calculateArea(length: number, breadth: number): number {\n  return length * breadth;\n}\n</code></pre>\n<h3>2. Follow Consistent Formatting and Indentation:</h3>\n<pre><code class="language-tsx">// Bad example\nfunction foo(){\nconsole.log(&#039;Hello&#039;);\n}\n\n// Good example\nfunction foo() {\n  console.log(&#039;Hello&#039;);\n}\n</code></pre>\n<h3>3. Keep Functions Short and Focused:</h3>\n<pre><code class="language-tsx">// Bad example\nfunction processUserData(user: User) {\n  // Perform user authentication\n  // Retrieve user&#039;s data\n  // Update user&#039;s profile\n  // Send email notifications\n}\n\n// Good example\nfunction authenticateUser(user: User) {\n  // Perform user authentication\n}\n\nfunction retrieveUserData(user: User) {\n  // Retrieve user&#039;s data\n}\n\nfunction updateUserProfile(user: User) {\n  // Update user&#039;s profile\n}\n\nfunction sendEmailNotification(user: User) {\n  // Send email notifications\n}\n</code></pre>\n<h3>4. Apply Strong Typing:</h3>\n<pre><code class="language-tsx">// Bad example\nfunction add(a, b) {\n  return a + b;\n}\n\n// Good example\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n</code></pre>\n<h3>5. Avoid Magic Numbers and Strings:</h3>\n<pre><code class="language-tsx">// Bad example\nfunction calculateTax(income: number): number {\n  return income * 0.2;\n}\n\n// Good example\nconst TAX_RATE = 0.2;\n\nfunction calculateTax(income: number): number {\n  return income * TAX_RATE;\n}\n</code></pre>\n<h3>6. Utilize TypeScript\'s Interfaces and Types:</h3>\n<pre><code class="language-tsx">// Bad example\nfunction printUserDetails(user: any) {\n  console.log(`Name: ${user.name}, Age: ${user.age}`);\n}\n\n// Good example\ninterface User {\n  name: string;\n  age: number;\n}\n\nfunction printUserDetails(user: User) {\n  console.log(`Name: ${user.name}, Age: ${user.age}`);\n}\n</code></pre>\n<h3>7. Optimize Error Handling with TypeScript\'s Union Types:</h3>\n<pre><code class="language-tsx">// Bad example\nfunction fetchData(url: string): Promise&lt;any&gt; {\n  return fetch(url)\n    .then((response) =&gt; response.json())\n    .catch((error) =&gt; {\n      console.error(&#039;Error occurred:&#039;, error);\n    });\n}\n\n// Good example\ntype FetchResult = { data: any } | { error: string };\n\nasync function fetchData(url: string): Promise&lt;FetchResult&gt; {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    return { data };\n  } catch (error) {\n    return { error: error.message };\n  }\n}\n</code></pre>\n<h3>8. Apply Proper Code Comments:</h3>\n<pre><code class="language-tsx">// Bad example\nconst result = a + b; // Add a and b\n\n// Good example\nconst sum = a + b; // Calculate the sum of a and b\n</code></pre>\n<h3>9. Eliminate Code Duplication with Functions and Helpers:</h3>\n<pre><code class="language-tsx">// Bad example\nfunction calculateArea(width: number, height: number): number {\n  const area = width * height;\n  console.log(`The area is ${area} square units.`);\n  return area;\n}\n\nfunction calculatePerimeter(width: number, height: number): number {\n  const perimeter = 2 * (width + height);\n  console.log(`The perimeter is ${perimeter} units.`);\n  return perimeter;\n}\n\n// Good example\nfunction calculateArea(width: number, height: number): number {\n  const area = width * height;\n  return area;\n}\n\nfunction calculatePerimeter(width: number, height: number): number {\n  const perimeter = 2 * (width + height);\n  return perimeter;\n}\n\nfunction logResult(result: number, unit: string): void {\n  console.log(`The ${unit} is ${result}.`);\n}\n\nconst width = 5;\nconst height = 10;\n\nconst area = calculateArea(width, height);\nlogResult(area, &#039;area&#039;);\n\nconst perimeter = calculatePerimeter(width, height);\nlogResult(perimeter, &#039;perimeter&#039;);\n</code></pre>\n<h3>10. Write Unit Tests:</h3>\n<pre><code class="language-tsx">// Bad example\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\n// Good example\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\n// Unit test\ntest(&#039;add function&#039;, () =&gt; {\n  expect(add(2, 3)).toBe(5);\n  expect(add(-1, 1)).toBe(0);\n});\n</code></pre>\n<p>By applying these 10 tricks, you\'ll be well on your way to writing super clean code in TypeScript. Remember, clean code is a mindset and a practice that requires ongoing effort. As you gain experience and work on larger projects, refining your coding style and following best practices will become second nature. Happy coding!</p>\n',
          protected: false,
          markdown:
            "Writing clean and maintainable code is essential for any developer, regardless of their level of expertise. Clean code improves readability, enhances collaboration, and makes debugging easier. In the context of TypeScript, a statically-typed superset of JavaScript, clean code becomes even more important to take full advantage of the language's features. Whether you are a beginner or looking to improve your TypeScript skills, here are 10 tricks, along with examples, to help you write super clean code.\r\n\r\n###  1. Use Descriptive Variable and Function Names:\r\n\r\n```tsx\r\n// Bad example\r\nconst x = 5;\r\nconst y = 10;\r\n\r\nfunction fn(a: number, b: number): number {\r\n  return a + b;\r\n}\r\n\r\n// Good example\r\nconst width = 5;\r\nconst height = 10;\r\n\r\nfunction calculateArea(length: number, breadth: number): number {\r\n  return length * breadth;\r\n}\r\n\r\n```\r\n\r\n### 2. Follow Consistent Formatting and Indentation:\r\n\r\n```tsx\r\n// Bad example\r\nfunction foo(){\r\nconsole.log('Hello');\r\n}\r\n\r\n// Good example\r\nfunction foo() {\r\n  console.log('Hello');\r\n}\r\n\r\n```\r\n\r\n### 3. Keep Functions Short and Focused:\r\n\r\n```tsx\r\n// Bad example\r\nfunction processUserData(user: User) {\r\n  // Perform user authentication\r\n  // Retrieve user's data\r\n  // Update user's profile\r\n  // Send email notifications\r\n}\r\n\r\n// Good example\r\nfunction authenticateUser(user: User) {\r\n  // Perform user authentication\r\n}\r\n\r\nfunction retrieveUserData(user: User) {\r\n  // Retrieve user's data\r\n}\r\n\r\nfunction updateUserProfile(user: User) {\r\n  // Update user's profile\r\n}\r\n\r\nfunction sendEmailNotification(user: User) {\r\n  // Send email notifications\r\n}\r\n\r\n```\r\n\r\n### 4. Apply Strong Typing:\r\n\r\n```tsx\r\n// Bad example\r\nfunction add(a, b) {\r\n  return a + b;\r\n}\r\n\r\n// Good example\r\nfunction add(a: number, b: number): number {\r\n  return a + b;\r\n}\r\n\r\n```\r\n\r\n### 5. Avoid Magic Numbers and Strings:\r\n\r\n```tsx\r\n// Bad example\r\nfunction calculateTax(income: number): number {\r\n  return income * 0.2;\r\n}\r\n\r\n// Good example\r\nconst TAX_RATE = 0.2;\r\n\r\nfunction calculateTax(income: number): number {\r\n  return income * TAX_RATE;\r\n}\r\n\r\n```\r\n\r\n### 6. Utilize TypeScript's Interfaces and Types:\r\n\r\n```tsx\r\n// Bad example\r\nfunction printUserDetails(user: any) {\r\n  console.log(`Name: ${user.name}, Age: ${user.age}`);\r\n}\r\n\r\n// Good example\r\ninterface User {\r\n  name: string;\r\n  age: number;\r\n}\r\n\r\nfunction printUserDetails(user: User) {\r\n  console.log(`Name: ${user.name}, Age: ${user.age}`);\r\n}\r\n\r\n```\r\n\r\n### 7. Optimize Error Handling with TypeScript's Union Types:\r\n\r\n```tsx\r\n// Bad example\r\nfunction fetchData(url: string): Promise<any> {\r\n  return fetch(url)\r\n    .then((response) => response.json())\r\n    .catch((error) => {\r\n      console.error('Error occurred:', error);\r\n    });\r\n}\r\n\r\n// Good example\r\ntype FetchResult = { data: any } | { error: string };\r\n\r\nasync function fetchData(url: string): Promise<FetchResult> {\r\n  try {\r\n    const response = await fetch(url);\r\n    const data = await response.json();\r\n    return { data };\r\n  } catch (error) {\r\n    return { error: error.message };\r\n  }\r\n}\r\n\r\n```\r\n\r\n### 8. Apply Proper Code Comments:\r\n\r\n```tsx\r\n// Bad example\r\nconst result = a + b; // Add a and b\r\n\r\n// Good example\r\nconst sum = a + b; // Calculate the sum of a and b\r\n\r\n```\r\n\r\n### 9. Eliminate Code Duplication with Functions and Helpers:\r\n\r\n```tsx\r\n// Bad example\r\nfunction calculateArea(width: number, height: number): number {\r\n  const area = width * height;\r\n  console.log(`The area is ${area} square units.`);\r\n  return area;\r\n}\r\n\r\nfunction calculatePerimeter(width: number, height: number): number {\r\n  const perimeter = 2 * (width + height);\r\n  console.log(`The perimeter is ${perimeter} units.`);\r\n  return perimeter;\r\n}\r\n\r\n// Good example\r\nfunction calculateArea(width: number, height: number): number {\r\n  const area = width * height;\r\n  return area;\r\n}\r\n\r\nfunction calculatePerimeter(width: number, height: number): number {\r\n  const perimeter = 2 * (width + height);\r\n  return perimeter;\r\n}\r\n\r\nfunction logResult(result: number, unit: string): void {\r\n  console.log(`The ${unit} is ${result}.`);\r\n}\r\n\r\nconst width = 5;\r\nconst height = 10;\r\n\r\nconst area = calculateArea(width, height);\r\nlogResult(area, 'area');\r\n\r\nconst perimeter = calculatePerimeter(width, height);\r\nlogResult(perimeter, 'perimeter');\r\n\r\n```\r\n\r\n### 10. Write Unit Tests:\r\n\r\n```tsx\r\n// Bad example\r\nfunction add(a: number, b: number): number {\r\n  return a + b;\r\n}\r\n\r\n// Good example\r\nfunction add(a: number, b: number): number {\r\n  return a + b;\r\n}\r\n\r\n// Unit test\r\ntest('add function', () => {\r\n  expect(add(2, 3)).toBe(5);\r\n  expect(add(-1, 1)).toBe(0);\r\n});\r\n\r\n```\r\n\r\nBy applying these 10 tricks, you'll be well on your way to writing super clean code in TypeScript. Remember, clean code is a mindset and a practice that requires ongoing effort. As you gain experience and work on larger projects, refining your coding style and following best practices will become second nature. Happy coding!",
        },
        excerpt: {
          rendered:
            '<p>Writing clean and maintainable code is essential for any developer, regardless of their level of expertise. Clean code improves readability, enhances collaboration, and makes debugging easier. In the context of TypeScript, a statically-typed superset of JavaScript, clean code becomes even more important to take full advantage of the language&#8217;s features. Whether you are a beginner [&hellip;]</p>\n',
          protected: false,
        },
        author: 1,
        featured_media: 523,
        comment_status: 'open',
        ping_status: 'open',
        sticky: false,
        template: '',
        format: 'standard',
        meta: {
          footnotes: '',
        },
        categories: [11, 9],
        tags: [10, 6],
        tags_list: [
          {
            term_id: 10,
            name: 'cleancode',
            slug: 'cleancode',
            term_group: 0,
            term_taxonomy_id: 10,
            taxonomy: 'post_tag',
            description: '',
            parent: 0,
            count: 1,
            filter: 'raw',
          },
          {
            term_id: 6,
            name: 'typescript',
            slug: 'typescript',
            term_group: 0,
            term_taxonomy_id: 6,
            taxonomy: 'post_tag',
            description: '',
            parent: 0,
            count: 2,
            filter: 'raw',
          },
        ],
        featured_image_url:
          'https://blog-api.aulianza.id/wp-content/uploads/2023/06/typescript.webp',
        _links: {
          self: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/25',
            },
          ],
          collection: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts',
            },
          ],
          about: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/types/post',
            },
          ],
          author: [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/users/1',
            },
          ],
          replies: [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/comments?post=25',
            },
          ],
          'version-history': [
            {
              count: 1,
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/25/revisions',
            },
          ],
          'predecessor-version': [
            {
              id: 26,
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/25/revisions/26',
            },
          ],
          'wp:featuredmedia': [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/media/523',
            },
          ],
          'wp:attachment': [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/media?parent=25',
            },
          ],
          'wp:term': [
            {
              taxonomy: 'category',
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/categories?post=25',
            },
            {
              taxonomy: 'post_tag',
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/tags?post=25',
            },
          ],
          curies: [
            {
              name: 'wp',
              href: 'https://api.w.org/{rel}',
              templated: true,
            },
          ],
        },
        total_views_count: 412,
      },
      {
        id: 21,
        date: '2023-06-06T03:45:10',
        date_gmt: '2023-06-06T03:45:10',
        guid: {
          rendered: 'https://blog-api.aulianza.id/?p=21',
        },
        modified: '2023-11-13T18:47:52',
        modified_gmt: '2023-11-13T18:47:52',
        slug: 'data-fetching-in-nextjs-choosing-the-right-method-for-optimal-performance',
        status: 'publish',
        type: 'post',
        link: 'https://blog-api.aulianza.id/data-fetching-in-nextjs-choosing-the-right-method-for-optimal-performance/',
        title: {
          rendered:
            'Next.js Data Fetching: Optimize Performance with the Right Method',
        },
        content: {
          rendered:
            '<p>Next.js, a popular React framework, provides powerful features for building server-rendered and statically generated web applications. One crucial aspect of web development is fetching data from APIs or databases. In this article, we will explore the different data fetching methods available in Next.js and understand when and how to use them. Whether you\'re a beginner or have some experience with Next.js, this guide will help you grasp the basics of data fetching in a simple and understandable manner.</p>\n<h3><strong>Static Data Fetching</strong></h3>\n<p>Static data fetching is ideal for content that remains unchanged across all requests. It involves fetching data at build time, enabling Next.js to pre-render the pages with the data. This approach ensures fast loading times and reduces the load on your server during runtime. To implement static data fetching, you can use Next.js\' <strong><code>getStaticProps</code></strong> function.</p>\n<p>Example:</p>\n<pre><code class="language-tsx">// pages/index.tsx\nimport React from &#039;react&#039;;\nimport { GetStaticProps } from &#039;next&#039;;\n\ninterface HomeProps {\n  data: string;\n}\n\nexport const getStaticProps: GetStaticProps&lt;HomeProps&gt; = async () =&gt; {\n  const res = await fetch(&#039;https://api.example.com/data&#039;);\n  const data = await res.json();\n\n  return {\n    props: {\n      data,\n    },\n  };\n};\n\nconst HomePage: React.FC&lt;HomeProps&gt; = ({ data }) =&gt; {\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;Welcome to my website!&lt;/h1&gt;\n      &lt;p&gt;{data}&lt;/p&gt;\n    &lt;/div&gt;\n  );\n};\n\nexport default HomePage;</code></pre>\n<p>In this example, the <code>getStaticProps</code> function fetches data from the specified API endpoint (<code>https://api.example.com/data</code>). The fetched data is then passed as a prop (<code>data</code>) to the <code>HomePage</code> component, which is pre-rendered at build time with the data.</p>\n<h3><strong>Server-side Rendering (SSR)</strong></h3>\n<p>Server-side rendering allows you to fetch data on each request made to the server. This method is useful when you need to display dynamic content that can change frequently. When a user visits a page, the server fetches the data and generates the HTML, which is then sent to the client. Next.js provides the <code>getServerSideProps</code> function to implement server-side rendering.\'</p>\n<p>Example:</p>\n<pre><code class="language-tsx">// pages/post/[id].tsx\nimport React from &#039;react&#039;;\nimport { GetServerSideProps } from &#039;next&#039;;\n\ninterface PostProps {\n  data: {\n    title: string;\n    body: string;\n  };\n}\n\nexport const getServerSideProps: GetServerSideProps&lt;PostProps&gt; = async (context) =&gt; {\n  const { params } = context;\n  const res = await fetch(`https://api.example.com/posts/${params?.id}`);\n  const data = await res.json();\n\n  return {\n    props: {\n      data,\n    },\n  };\n};\n\nconst PostPage: React.FC&lt;PostProps&gt; = ({ data }) =&gt; {\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;{data.title}&lt;/h1&gt;\n      &lt;p&gt;{data.body}&lt;/p&gt;\n    &lt;/div&gt;\n  );\n};\n\nexport default PostPage;</code></pre>\n<p>In this example, the <code>getServerSideProps</code> function fetches the data for a specific post based on the <code>id</code> parameter from the API endpoint (<code>https://api.example.com/posts/[id]</code>). The fetched data is then passed as a prop (<code>data</code>) to the <code>PostPage</code> component, which is rendered on the server-side for each request.</p>\n<h3><strong>Client-side Rendering (CSR)</strong></h3>\n<p>Client-side rendering is suitable for scenarios where data needs to be fetched after the initial page load. This method is commonly used for interactive components or when the data is not required for SEO purposes. With client-side rendering, the page is initially rendered without the data, and the data is fetched asynchronously on the client-side using JavaScript. Next.js supports client-side rendering through the <code>useEffect</code> hook or other libraries like React Query or SWR.</p>\n<p>Example:</p>\n<pre><code class="language-tsx">// pages/products.tsx\nimport React, { useEffect, useState } from &#039;react&#039;;\n\nconst ProductsPage: React.FC = () =&gt; {\n  const [products, setProducts] = useState&lt;string[]&gt;([]);\n\n  useEffect(() =&gt; {\n    const fetchProducts = async () =&gt; {\n      const res = await fetch(&#039;https://api.example.com/products&#039;);\n      const data = await res.json();\n      setProducts(data);\n    };\n\n    fetchProducts();\n  }, []);\n\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;Products&lt;/h1&gt;\n      &lt;ul&gt;\n        {products.map((product) =&gt; (\n          &lt;li key={product}&gt;{product}&lt;/li&gt;\n        ))}\n      &lt;/ul&gt;\n    &lt;/div&gt;\n  );\n};\n\nexport default ProductsPage;</code></pre>\n<p>In this example, the <code>useEffect</code> hook is used to fetch the products data from the API endpoint (<code>https://api.example.com/products</code>). The fetched data is stored in the <code>products</code> state variable, which triggers a re-render of the component. The product names are then displayed in a list on the client-side.</p>\n<h3><strong>Incremental Static Regeneration (ISR)</strong></h3>\n<p>Incremental Static Regeneration combines the benefits of static and server-side rendering. It allows you to pre-render static pages at build time and then regenerate them periodically or on-demand. This approach is ideal for content that changes occasionally but doesn\'t require real-time updates. Next.js offers the <code>revalidate</code> option in <code>getStaticProps</code> to enable ISR.</p>\n<p>Example:</p>\n<pre><code class="language-tsx">// pages/blog/[slug].tsx\nimport React from &#039;react&#039;;\nimport { GetStaticProps, GetStaticPaths } from &#039;next&#039;;\n\ninterface BlogProps {\n  data: {\n    title: string;\n    content: string;\n  };\n}\n\nexport const getStaticProps: GetStaticProps&lt;BlogProps&gt; = async (context) =&gt; {\n  const { params } = context;\n  const res = await fetch(`https://api.example.com/blog/${params?.slug}`);\n  const data = await res.json();\n\n  return {\n    props: {\n      data,\n    },\n    revalidate: 60, // Re-generate page every 60 seconds\n  };\n};\n\nexport const getStaticPaths: GetStaticPaths = async () =&gt; {\n  const res = await fetch(&#039;https://api.example.com/blog&#039;);\n  const data = await res.json();\n\n  const paths = data.map((post: { slug: string }) =&gt; ({\n    params: { slug: post.slug },\n  }));\n\n  return {\n    paths,\n    fallback: true,\n  };\n};\n\nconst BlogPage: React.FC&lt;BlogProps&gt; = ({ data }) =&gt; {\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;{data.title}&lt;/h1&gt;\n      &lt;p&gt;{data.content}&lt;/p&gt;\n    &lt;/div&gt;\n  );\n};\n\nexport default BlogPage;</code></pre>\n<p>In this example, the <code>getStaticProps</code> function fetches the blog post data based on the <code>slug</code> parameter from the API endpoint (<code>https://api.example.com/blog/[slug]</code>). The fetched data is then passed as a prop (<code>data</code>) to the <code>BlogPage</code> component. Additionally, the <code>getStaticPaths</code> function is used to generate dynamic paths for all blog posts. The page will be re-generated every 60 seconds to ensure the content is up to date.</p>\n<p><strong>Conclusion:</strong><br />\nUnderstanding the different data fetching methods in Next.js is essential for building efficient and performant web applications. By utilizing static data fetching, server-side rendering, client-side rendering, and incremental static regeneration, you can create responsive and optimized web experiences. Experiment with these approaches and choose the one that best suits your project\'s needs. Happy coding!</p>\n',
          protected: false,
          markdown:
            "Next.js, a popular React framework, provides powerful features for building server-rendered and statically generated web applications. One crucial aspect of web development is fetching data from APIs or databases. In this article, we will explore the different data fetching methods available in Next.js and understand when and how to use them. Whether you're a beginner or have some experience with Next.js, this guide will help you grasp the basics of data fetching in a simple and understandable manner.\r\n\r\n\r\n### **Static Data Fetching**\r\n\r\nStatic data fetching is ideal for content that remains unchanged across all requests. It involves fetching data at build time, enabling Next.js to pre-render the pages with the data. This approach ensures fast loading times and reduces the load on your server during runtime. To implement static data fetching, you can use Next.js' **`getStaticProps`** function.\r\n\r\nExample:\r\n\r\n```tsx\r\n// pages/index.tsx\r\nimport React from 'react';\r\nimport { GetStaticProps } from 'next';\r\n\r\ninterface HomeProps {\r\n  data: string;\r\n}\r\n\r\nexport const getStaticProps: GetStaticProps<HomeProps> = async () => {\r\n  const res = await fetch('https://api.example.com/data');\r\n  const data = await res.json();\r\n\r\n  return {\r\n    props: {\r\n      data,\r\n    },\r\n  };\r\n};\r\n\r\nconst HomePage: React.FC<HomeProps> = ({ data }) => {\r\n  return (\r\n    <div>\r\n      <h1>Welcome to my website!</h1>\r\n      <p>{data}</p>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default HomePage;\r\n```\r\n\r\nIn this example, the `getStaticProps` function fetches data from the specified API endpoint (`https://api.example.com/data`). The fetched data is then passed as a prop (`data`) to the `HomePage` component, which is pre-rendered at build time with the data.\r\n\r\n\r\n### **Server-side Rendering (SSR)**\r\n\r\nServer-side rendering allows you to fetch data on each request made to the server. This method is useful when you need to display dynamic content that can change frequently. When a user visits a page, the server fetches the data and generates the HTML, which is then sent to the client. Next.js provides the `getServerSideProps` function to implement server-side rendering.'\r\n\r\nExample:\r\n\r\n```tsx\r\n// pages/post/[id].tsx\r\nimport React from 'react';\r\nimport { GetServerSideProps } from 'next';\r\n\r\ninterface PostProps {\r\n  data: {\r\n    title: string;\r\n    body: string;\r\n  };\r\n}\r\n\r\nexport const getServerSideProps: GetServerSideProps<PostProps> = async (context) => {\r\n  const { params } = context;\r\n  const res = await fetch(`https://api.example.com/posts/${params?.id}`);\r\n  const data = await res.json();\r\n\r\n  return {\r\n    props: {\r\n      data,\r\n    },\r\n  };\r\n};\r\n\r\nconst PostPage: React.FC<PostProps> = ({ data }) => {\r\n  return (\r\n    <div>\r\n      <h1>{data.title}</h1>\r\n      <p>{data.body}</p>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default PostPage;\r\n```\r\n\r\nIn this example, the `getServerSideProps` function fetches the data for a specific post based on the `id` parameter from the API endpoint (`https://api.example.com/posts/[id]`). The fetched data is then passed as a prop (`data`) to the `PostPage` component, which is rendered on the server-side for each request.\r\n\r\n\r\n### **Client-side Rendering (CSR)**\r\n\r\nClient-side rendering is suitable for scenarios where data needs to be fetched after the initial page load. This method is commonly used for interactive components or when the data is not required for SEO purposes. With client-side rendering, the page is initially rendered without the data, and the data is fetched asynchronously on the client-side using JavaScript. Next.js supports client-side rendering through the `useEffect` hook or other libraries like React Query or SWR.\r\n\r\nExample:\r\n\r\n```tsx\r\n// pages/products.tsx\r\nimport React, { useEffect, useState } from 'react';\r\n\r\nconst ProductsPage: React.FC = () => {\r\n  const [products, setProducts] = useState<string[]>([]);\r\n\r\n  useEffect(() => {\r\n    const fetchProducts = async () => {\r\n      const res = await fetch('https://api.example.com/products');\r\n      const data = await res.json();\r\n      setProducts(data);\r\n    };\r\n\r\n    fetchProducts();\r\n  }, []);\r\n\r\n  return (\r\n    <div>\r\n      <h1>Products</h1>\r\n      <ul>\r\n        {products.map((product) => (\r\n          <li key={product}>{product}</li>\r\n        ))}\r\n      </ul>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default ProductsPage;\r\n```\r\n\r\nIn this example, the `useEffect` hook is used to fetch the products data from the API endpoint (`https://api.example.com/products`). The fetched data is stored in the `products` state variable, which triggers a re-render of the component. The product names are then displayed in a list on the client-side.\r\n\r\n\r\n### **Incremental Static Regeneration (ISR)**\r\n\r\nIncremental Static Regeneration combines the benefits of static and server-side rendering. It allows you to pre-render static pages at build time and then regenerate them periodically or on-demand. This approach is ideal for content that changes occasionally but doesn't require real-time updates. Next.js offers the `revalidate` option in `getStaticProps` to enable ISR.\r\n\r\nExample:\r\n\r\n```tsx\r\n// pages/blog/[slug].tsx\r\nimport React from 'react';\r\nimport { GetStaticProps, GetStaticPaths } from 'next';\r\n\r\ninterface BlogProps {\r\n  data: {\r\n    title: string;\r\n    content: string;\r\n  };\r\n}\r\n\r\nexport const getStaticProps: GetStaticProps<BlogProps> = async (context) => {\r\n  const { params } = context;\r\n  const res = await fetch(`https://api.example.com/blog/${params?.slug}`);\r\n  const data = await res.json();\r\n\r\n  return {\r\n    props: {\r\n      data,\r\n    },\r\n    revalidate: 60, // Re-generate page every 60 seconds\r\n  };\r\n};\r\n\r\nexport const getStaticPaths: GetStaticPaths = async () => {\r\n  const res = await fetch('https://api.example.com/blog');\r\n  const data = await res.json();\r\n\r\n  const paths = data.map((post: { slug: string }) => ({\r\n    params: { slug: post.slug },\r\n  }));\r\n\r\n  return {\r\n    paths,\r\n    fallback: true,\r\n  };\r\n};\r\n\r\nconst BlogPage: React.FC<BlogProps> = ({ data }) => {\r\n  return (\r\n    <div>\r\n      <h1>{data.title}</h1>\r\n      <p>{data.content}</p>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default BlogPage;\r\n```\r\n\r\nIn this example, the `getStaticProps` function fetches the blog post data based on the `slug` parameter from the API endpoint (`https://api.example.com/blog/[slug]`). The fetched data is then passed as a prop (`data`) to the `BlogPage` component. Additionally, the `getStaticPaths` function is used to generate dynamic paths for all blog posts. The page will be re-generated every 60 seconds to ensure the content is up to date.\r\n\r\n**Conclusion:**\r\nUnderstanding the different data fetching methods in Next.js is essential for building efficient and performant web applications. By utilizing static data fetching, server-side rendering, client-side rendering, and incremental static regeneration, you can create responsive and optimized web experiences. Experiment with these approaches and choose the one that best suits your project's needs. Happy coding!",
        },
        excerpt: {
          rendered:
            '<p>Next.js, a popular React framework, provides powerful features for building server-rendered and statically generated web applications. One crucial aspect of web development is fetching data from APIs or databases. In this article, we will explore the different data fetching methods available in Next.js and understand when and how to use them. Whether you&#8217;re a beginner [&hellip;]</p>\n',
          protected: false,
        },
        author: 1,
        featured_media: 529,
        comment_status: 'open',
        ping_status: 'open',
        sticky: false,
        template: '',
        format: 'standard',
        meta: {
          footnotes: '',
        },
        categories: [11, 8],
        tags: [7, 5],
        tags_list: [
          {
            term_id: 7,
            name: 'next.js',
            slug: 'next-js',
            term_group: 0,
            term_taxonomy_id: 7,
            taxonomy: 'post_tag',
            description: '',
            parent: 0,
            count: 2,
            filter: 'raw',
          },
          {
            term_id: 5,
            name: 'react',
            slug: 'react',
            term_group: 0,
            term_taxonomy_id: 5,
            taxonomy: 'post_tag',
            description: '',
            parent: 0,
            count: 3,
            filter: 'raw',
          },
        ],
        featured_image_url:
          'https://blog-api.aulianza.id/wp-content/uploads/2023/06/nextjs13.webp',
        _links: {
          self: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/21',
            },
          ],
          collection: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts',
            },
          ],
          about: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/types/post',
            },
          ],
          author: [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/users/1',
            },
          ],
          replies: [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/comments?post=21',
            },
          ],
          'version-history': [
            {
              count: 1,
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/21/revisions',
            },
          ],
          'predecessor-version': [
            {
              id: 22,
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/21/revisions/22',
            },
          ],
          'wp:featuredmedia': [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/media/529',
            },
          ],
          'wp:attachment': [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/media?parent=21',
            },
          ],
          'wp:term': [
            {
              taxonomy: 'category',
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/categories?post=21',
            },
            {
              taxonomy: 'post_tag',
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/tags?post=21',
            },
          ],
          curies: [
            {
              name: 'wp',
              href: 'https://api.w.org/{rel}',
              templated: true,
            },
          ],
        },
        total_views_count: 426,
      },
      {
        id: 23,
        date: '2023-06-05T03:30:16',
        date_gmt: '2023-06-05T03:30:16',
        guid: {
          rendered: 'https://blog-api.aulianza.id/?p=23',
        },
        modified: '2023-11-12T13:40:42',
        modified_gmt: '2023-11-12T13:40:42',
        slug: 'introduction-to-nextjs-building-modern-web-applications',
        status: 'publish',
        type: 'post',
        link: 'https://blog-api.aulianza.id/introduction-to-nextjs-building-modern-web-applications/',
        title: {
          rendered: 'Introduction to Next.js: Building Modern Web App',
        },
        content: {
          rendered:
            "<p>In recent years, web development has undergone a significant transformation, with a shift towards building dynamic and interactive applications. With the rise of Single-Page Applications (SPAs) and the demand for better performance and user experiences, developers are constantly seeking tools and frameworks that simplify the process of building robust web applications. Next.js, a popular React framework, has emerged as a powerful solution for building modern web applications with ease.</p>\n<h3><strong>What is Next.js?</strong></h3>\n<p>Next.js is an open-source framework for building web applications, created by Vercel (formerly known as Zeit). It is built on top of React and offers a powerful set of features that enable developers to build scalable and production-ready applications. Next.js provides a solution for server-side rendering (SSR) and static site generation (SSG), making it an excellent choice for applications that require fast loading times, SEO optimization, and a great user experience.</p>\n<h3><strong>Key Features of Next.js:</strong></h3>\n<ol>\n<li><strong>Server-side rendering (SSR)</strong>: One of the standout features of Next.js is its support for SSR. Unlike traditional client-side rendering, where the HTML is generated by the browser, SSR allows you to pre-render pages on the server and send them to the client already populated with data. This approach improves performance and ensures that search engines can easily index your content.</li>\n<li><strong>Static site generation (SSG)</strong>: Next.js also supports SSG, which allows you to pre-render static pages at build time. This means that your application can benefit from the performance gains of serving static files, while still being able to fetch data dynamically when needed. SSG is particularly useful for content-driven websites or blogs.</li>\n<li><strong>Automatic code splitting</strong>: Next.js optimizes your application's performance by automatically splitting your JavaScript code into smaller chunks. Only the code necessary for each page is loaded, resulting in faster initial page loads and improved user experience. Additionally, Next.js optimizes assets for delivery, such as images and CSS, making your application even more efficient.</li>\n<li><strong>API routes</strong>: Next.js provides a built-in API routes feature that allows you to create serverless functions to handle server-side logic. This makes it easy to create custom APIs or backend functionality within your Next.js application, without the need for an additional server.</li>\n<li><strong>CSS support</strong>: Next.js offers various options for styling your applications, including CSS modules, styled-jsx, and support for popular CSS-in-JS libraries like styled-components and Tailwind CSS. This flexibility allows you to choose the styling approach that best suits your project.</li>\n<li><strong>Hot module replacement</strong>: Next.js includes a feature called Hot Module Replacement (HMR), which allows you to update your code in real-time without losing the application's state. This feature significantly speeds up the development process, as you can instantly see the changes reflected in the browser.</li>\n</ol>\n<h3><strong>Getting Started with Next.js:</strong></h3>\n<p>To start using Next.js, you'll need to have Node.js and npm (Node Package Manager) installed on your machine. You can then create a new Next.js project by running a simple command in your terminal:</p>\n<pre><code class=\"language-jsx\">npx create-next-app my-app</code></pre>\n<p>This command will set up a new Next.js project with all the necessary dependencies and a basic folder structure. From there, you can navigate to the project directory and start the development server:</p>\n<pre><code class=\"language-jsx\">cd my-app\nnpm run dev</code></pre>\n<p>Next.js will launch a development server and provide you with a local URL where you can access your application. You can then start building your Next.js application by creating pages, components, and leveraging the framework's powerful features.</p>\n<h3><strong>Conclusion:</strong></h3>\n<p>Next.js has quickly become a popular choice among developers for building modern web applications. Its support for server-side rendering, static site generation, and automatic code splitting makes it an excellent framework for creating fast, SEO-friendly applications. With its easy setup and integration with React, Next.js empowers developers to focus on building great user experiences while taking advantage of the latest web development techniques. Whether you're building a small personal website or a complex enterprise application, Next.js can be a valuable tool in your web development toolbox.</p>\n",
          protected: false,
          markdown:
            "In recent years, web development has undergone a significant transformation, with a shift towards building dynamic and interactive applications. With the rise of Single-Page Applications (SPAs) and the demand for better performance and user experiences, developers are constantly seeking tools and frameworks that simplify the process of building robust web applications. Next.js, a popular React framework, has emerged as a powerful solution for building modern web applications with ease.\r\n\r\n### **What is Next.js?**\r\n\r\nNext.js is an open-source framework for building web applications, created by Vercel (formerly known as Zeit). It is built on top of React and offers a powerful set of features that enable developers to build scalable and production-ready applications. Next.js provides a solution for server-side rendering (SSR) and static site generation (SSG), making it an excellent choice for applications that require fast loading times, SEO optimization, and a great user experience.\r\n\r\n### **Key Features of Next.js:**\r\n\r\n1. **Server-side rendering (SSR)**: One of the standout features of Next.js is its support for SSR. Unlike traditional client-side rendering, where the HTML is generated by the browser, SSR allows you to pre-render pages on the server and send them to the client already populated with data. This approach improves performance and ensures that search engines can easily index your content.\r\n2. **Static site generation (SSG)**: Next.js also supports SSG, which allows you to pre-render static pages at build time. This means that your application can benefit from the performance gains of serving static files, while still being able to fetch data dynamically when needed. SSG is particularly useful for content-driven websites or blogs.\r\n3. **Automatic code splitting**: Next.js optimizes your application's performance by automatically splitting your JavaScript code into smaller chunks. Only the code necessary for each page is loaded, resulting in faster initial page loads and improved user experience. Additionally, Next.js optimizes assets for delivery, such as images and CSS, making your application even more efficient.\r\n4. **API routes**: Next.js provides a built-in API routes feature that allows you to create serverless functions to handle server-side logic. This makes it easy to create custom APIs or backend functionality within your Next.js application, without the need for an additional server.\r\n5. **CSS support**: Next.js offers various options for styling your applications, including CSS modules, styled-jsx, and support for popular CSS-in-JS libraries like styled-components and Tailwind CSS. This flexibility allows you to choose the styling approach that best suits your project.\r\n6. **Hot module replacement**: Next.js includes a feature called Hot Module Replacement (HMR), which allows you to update your code in real-time without losing the application's state. This feature significantly speeds up the development process, as you can instantly see the changes reflected in the browser.\r\n\r\n### **Getting Started with Next.js:**\r\n\r\nTo start using Next.js, you'll need to have Node.js and npm (Node Package Manager) installed on your machine. You can then create a new Next.js project by running a simple command in your terminal:\r\n\r\n```jsx\r\nnpx create-next-app my-app\r\n```\r\n\r\nThis command will set up a new Next.js project with all the necessary dependencies and a basic folder structure. From there, you can navigate to the project directory and start the development server:\r\n\r\n```jsx\r\ncd my-app\r\nnpm run dev\r\n```\r\n\r\nNext.js will launch a development server and provide you with a local URL where you can access your application. You can then start building your Next.js application by creating pages, components, and leveraging the framework's powerful features.\r\n\r\n### **Conclusion:**\r\n\r\nNext.js has quickly become a popular choice among developers for building modern web applications. Its support for server-side rendering, static site generation, and automatic code splitting makes it an excellent framework for creating fast, SEO-friendly applications. With its easy setup and integration with React, Next.js empowers developers to focus on building great user experiences while taking advantage of the latest web development techniques. Whether you're building a small personal website or a complex enterprise application, Next.js can be a valuable tool in your web development toolbox.",
        },
        excerpt: {
          rendered:
            '<p>In recent years, web development has undergone a significant transformation, with a shift towards building dynamic and interactive applications. With the rise of Single-Page Applications (SPAs) and the demand for better performance and user experiences, developers are constantly seeking tools and frameworks that simplify the process of building robust web applications. Next.js, a popular React [&hellip;]</p>\n',
          protected: false,
        },
        author: 1,
        featured_media: 27,
        comment_status: 'open',
        ping_status: 'open',
        sticky: false,
        template: '',
        format: 'standard',
        meta: {
          footnotes: '',
        },
        categories: [11, 8],
        tags: [7, 5],
        tags_list: [
          {
            term_id: 7,
            name: 'next.js',
            slug: 'next-js',
            term_group: 0,
            term_taxonomy_id: 7,
            taxonomy: 'post_tag',
            description: '',
            parent: 0,
            count: 2,
            filter: 'raw',
          },
          {
            term_id: 5,
            name: 'react',
            slug: 'react',
            term_group: 0,
            term_taxonomy_id: 5,
            taxonomy: 'post_tag',
            description: '',
            parent: 0,
            count: 3,
            filter: 'raw',
          },
        ],
        featured_image_url:
          'https://blog-api.aulianza.id/wp-content/uploads/2023/11/nextjs.webp',
        _links: {
          self: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/23',
            },
          ],
          collection: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts',
            },
          ],
          about: [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/types/post',
            },
          ],
          author: [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/users/1',
            },
          ],
          replies: [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/comments?post=23',
            },
          ],
          'version-history': [
            {
              count: 1,
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/23/revisions',
            },
          ],
          'predecessor-version': [
            {
              id: 24,
              href: 'https://blog-api.aulianza.id/api/wp/v2/posts/23/revisions/24',
            },
          ],
          'wp:featuredmedia': [
            {
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/media/27',
            },
          ],
          'wp:attachment': [
            {
              href: 'https://blog-api.aulianza.id/api/wp/v2/media?parent=23',
            },
          ],
          'wp:term': [
            {
              taxonomy: 'category',
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/categories?post=23',
            },
            {
              taxonomy: 'post_tag',
              embeddable: true,
              href: 'https://blog-api.aulianza.id/api/wp/v2/tags?post=23',
            },
          ],
          curies: [
            {
              name: 'wp',
              href: 'https://api.w.org/{rel}',
              templated: true,
            },
          ],
        },
        total_views_count: 275,
      },
    ],
  });

  console.log('Created new user: ', newUser);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default prisma;
