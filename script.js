// ================== CONFIG ==================
const HACKATHON_DURATION_MIN = 60; // 60 min
const MAX_WARNINGS = 10;

// ================== QUESTION BANK ==================
//
// IMPORTANT:
// - Each question object:
//   { id, marks, text, options: [ "A) ...", "B) ...", "C) ...", "D) ..." ], correct: "A"/"B"/"C"/"D" }
// - marks must be 3 or 4
// - This array currently has 20 x 3-mark + 10 x 4-mark questions
// - You can add more questions from questions.txt in the same format
//   (the script will still only pick 20×3M + 10×4M = 30 Q total).
//

const questionBank = [
  // ===================== 3-MARK QUESTIONS (20) =====================

   {
      "id": "Q1",
      "marks": 3,
      "text": "What will this code output?\n\nfor i in range(2, 7, 2):\n    print(i, end=' ')",
      "options": [
        "A) 2 4 6",
        "B) 2 3 4 5 6",
        "C) 2 4",
        "D) 3 5 7"
      ],
      "correct": "A"
    },
    {
      "id": "Q2",
      "marks": 3,
      "text": "What’s the output of len(\"Tech\" + \"Talk\")?",
      "options": [
        "A) 8",
        "B) 7",
        "C) 9",
        "D) Error"
      ],
      "correct": "A"
    },
    {
      "id": "Q3",
      "marks": 3,
      "text": "In debugging, what’s the best first step for runtime errors?",
      "options": [
        "A) Check syntax",
        "B) Check variable initialization",
        "C) Restart IDE",
        "D) Ignore and rerun"
      ],
      "correct": "B"
    },
    {
      "id": "Q4",
      "marks": 3,
      "text": "Stack works on:",
      "options": [
        "A) FIFO",
        "B) FILO",
        "C) LIFO",
        "D) LILO"
      ],
      "correct": "C"
    },
    {
      "id": "Q5",
      "marks": 3,
      "text": "Queue works on:",
      "options": [
        "A) FIFO",
        "B) LIFO",
        "C) FILO",
        "D) Random"
      ],
      "correct": "A"
    },
    {
      "id": "Q6",
      "marks": 3,
      "text": "Time complexity of bubble sort (worst case)?",
      "options": [
        "A) O(n)",
        "B) O(n²)",
        "C) O(log n)",
        "D) O(1)"
      ],
      "correct": "B"
    },
    {
      "id": "Q7",
      "marks": 3,
      "text": "Which data structure can be implemented using two stacks?",
      "options": [
        "A) Stack",
        "B) Queue",
        "C) Tree",
        "D) Heap"
      ],
      "correct": "B"
    },
    {
      "id": "Q8",
      "marks": 3,
      "text": "What will happen if pop is performed on an empty stack?",
      "options": [
        "A) Returns None",
        "B) Underflow",
        "C) Overflow",
        "D) Zero"
      ],
      "correct": "B"
    },
    {
      "id": "Q9",
      "marks": 3,
      "text": "What’s the output?\n\ns = 0\nfor i in range(1, 5):\n    s += i\nprint(s)",
      "options": [
        "A) 10",
        "B) 15",
        "C) 5",
        "D) 6"
      ],
      "correct": "A"
    },
    {
      "id": "Q10",
      "marks": 3,
      "text": "Next number in sequence: 3, 6, 12, 24, ?",
      "options": [
        "A) 36",
        "B) 48",
        "C) 30",
        "D) 40"
      ],
      "correct": "B"
    },
    {
      "id": "Q11",
      "marks": 3,
      "text": "Which AWS service provides compute instances?",
      "options": [
        "A) EC2",
        "B) S3",
        "C) RDS",
        "D) CloudWatch"
      ],
      "correct": "A"
    },
    {
      "id": "Q12",
      "marks": 3,
      "text": "Which AWS service is used for object storage?",
      "options": [
        "A) EC2",
        "B) S3",
        "C) DynamoDB",
        "D) Route53"
      ],
      "correct": "B"
    },
    {
      "id": "Q13",
      "marks": 3,
      "text": "First step in an ML workflow?",
      "options": [
        "A) Train model",
        "B) Collect data",
        "C) Tune hyper-parameters",
        "D) Deploy model"
      ],
      "correct": "B"
    },
    {
      "id": "Q14",
      "marks": 3,
      "text": "Effective prompt for Gen-AI should be:",
      "options": [
        "A) Very short",
        "B) Context-rich",
        "C) Random",
        "D) Over-detailed"
      ],
      "correct": "B"
    },
    {
      "id": "Q15",
      "marks": 3,
      "text": "In API usage, typical sequence is:",
      "options": [
        "A) Response → Request → Output",
        "B) Request → Response → Output",
        "C) Output → Request",
        "D) None"
      ],
      "correct": "B"
    },
    {
      "id": "Q16",
      "marks": 3,
      "text": "Logic to find even numbers from a list?",
      "options": [
        "A) x%2==1",
        "B) x%2==0",
        "C) x/2==1",
        "D) x**2 is even"
      ],
      "correct": "B"
    },
    {
      "id": "Q17",
      "marks": 3,
      "text": "Which AWS service is mainly for relational databases?",
      "options": [
        "A) EC2",
        "B) S3",
        "C) RDS",
        "D) Lambda"
      ],
      "correct": "C"
    },
    {
      "id": "Q18",
      "marks": 3,
      "text": "Which CI/CD tool is commonly used for automating builds and deployments?",
      "options": [
        "A) CloudWatch",
        "B) Jenkins",
        "C) Route53",
        "D) S3"
      ],
      "correct": "B"
    },
    {
      "id": "Q19",
      "marks": 3,
      "text": "Which model type is used for classification problems?",
      "options": [
        "A) Regression model",
        "B) Classification model",
        "C) Clustering model",
        "D) Segmentation model"
      ],
      "correct": "B"
    },
    {
      "id": "Q20",
      "marks": 3,
      "text": "Which data structure is used to implement a **FIFO** system?",
      "options": [
        "A) Stack",
        "B) Array",
        "C) Queue",
        "D) Heap"
      ],
      "correct": "C"
    },
    {
      "id": "Q21",
      "marks": 3,
      "text": "Which of the following is **always** an immutable data type in Python?",
      "options": [
        "A) List",
        "B) Set",
        "C) Dictionary",
        "D) String"
      ],
      "correct": "D"
    },
    {
      "id": "Q22",
      "marks": 3,
      "text": "Which keyword is used to explicitly modify a global variable from within a function's local scope?",
      "options": [
        "A) `local`",
        "B) `static`",
        "C) `global`",
        "D) `extern`"
      ],
      "correct": "C"
    },
    {
      "id": "Q23",
      "marks": 3,
      "text": "Which operator is used to unpack iterable objects into arguments for a function call in Python?",
      "options": [
        "A) `#`",
        "B) `@`",
        "C) `*` (splat)",
        "D) `$`"
      ],
      "correct": "C"
    },
    {
      "id": "Q24",
      "marks": 3,
      "text": "What will be the output of `type(lambda x: x*2)`?",
      "options": [
        "A) `int`",
        "B) `function`",
        "C) `lambda`",
        "D) `str`"
      ],
      "correct": "B"
    },
    {
      "id": "Q25",
      "marks": 3,
      "text": "What does the acronym **REPL** stand for in the context of programming environments?",
      "options": [
        "A) Rapid Execution Program Logic",
        "B) Read-Evaluate-Print-Loop",
        "C) Runtime Environment Protocol Language",
        "D) Reliable Execution Performance Layer"
      ],
      "correct": "B"
    },
    {
      "id": "Q26",
      "marks": 3,
      "text": "Which operator is used for matrix multiplication in NumPy?",
      "options": [
        "A) `*`",
        "B) `**`",
        "C) `@`",
        "D) `//`"
      ],
      "correct": "C"
    },
    {
      "id": "Q27",
      "marks": 3,
      "text": "What is the correct way to declare an empty tuple in Python?",
      "options": [
        "A) `t = {}`",
        "B) `t = []`",
        "C) `t = ()`",
        "D) `t = tuple`"
      ],
      "correct": "C"
    },
    {
      "id": "Q28",
      "marks": 3,
      "text": "In Python, what is a **docstring** used for?",
      "options": [
        "A) Inline comments",
        "B) Defining variable types",
        "C) Documentation accessible via `help()`",
        "D) Creating private methods"
      ],
      "correct": "C"
    },
    {
      "id": "Q29",
      "marks": 3,
      "text": "The term **amortized analysis** in complexity theory refers to:",
      "options": [
        "A) Averaging the time of operations over a sequence of operations",
        "B) Analyzing only the worst-case scenario",
        "C) Analyzing only the best-case scenario",
        "D) Analyzing memory usage only"
      ],
      "correct": "A"
    },
    {
      "id": "Q30",
      "marks": 3,
      "text": "Which of these numbers is both a perfect square and a perfect cube?",
      "options": [
        "A) 16",
        "B) 27",
        "C) 64",
        "D) 100"
      ],
      "correct": "C"
    },
    {
      "id": "Q31",
      "marks": 3,
      "text": "Which logic operator is represented by the symbol $\land$?",
      "options": [
        "A) OR",
        "B) NOT",
        "C) AND",
        "D) XOR"
      ],
      "correct": "C"
    },
    {
      "id": "Q32",
      "marks": 3,
      "text": "What is the next logical number in the series: 1, 1, 2, 3, 5, 8, ?",
      "options": [
        "A) 12",
        "B) 13",
        "C) 16",
        "D) 10"
      ],
      "correct": "B"
    },
    {
      "id": "Q33",
      "marks": 3,
      "text": "The negation of the statement \"All birds can fly\" is:",
      "options": [
        "A) All birds cannot fly",
        "B) No birds can fly",
        "C) Some birds cannot fly",
        "D) Some birds can fly"
      ],
      "correct": "C"
    },
    {
      "id": "Q34",
      "marks": 3,
      "text": "In modular arithmetic, what is $(7 + 10) \pmod 5$?",
      "options": [
        "A) 2",
        "B) 7",
        "C) 17",
        "D) 0"
      ],
      "correct": "A"
    },
    {
      "id": "Q35",
      "marks": 3,
      "text": "How many prime numbers are there between 1 and 20 (inclusive)?",
      "options": [
        "A) 7",
        "B) 8",
        "C) 9",
        "D) 10"
      ],
      "correct": "B"
    },
    {
      "id": "Q36",
      "marks": 3,
      "text": "What does the **Principle of Least Privilege** dictate in cloud security (IAM)?",
      "options": [
        "A) Granting users maximum permissions for flexibility",
        "B) Granting only the permissions required to perform a task",
        "C) Allowing all users to be administrators",
        "D) Encrypting all data"
      ],
      "correct": "B"
    },
    {
      "id": "Q37",
      "marks": 3,
      "text": "Which AWS service is used for registering and managing domain names?",
      "options": [
        "A) S3",
        "B) Route 53",
        "C) CloudFront",
        "D) IAM"
      ],
      "correct": "B"
    },
    {
      "id": "Q38",
      "marks": 3,
      "text": "What is the primary benefit of deploying applications in **multiple Availability Zones (AZs)**?",
      "options": [
        "A) Lower monthly cost",
        "B) Increased fault tolerance and high availability",
        "C) Faster server startup time",
        "D) Simpler networking configuration"
      ],
      "correct": "B"
    },
    {
      "id": "Q39",
      "marks": 3,
      "text": "What is the most basic building block of AWS networking (IP space)?",
      "options": [
        "A) Network Interface Card (NIC)",
        "B) Security Group",
        "C) Subnet",
        "D) Internet Gateway"
      ],
      "correct": "C"
    },
    {
      "id": "Q40",
      "marks": 3,
      "text": "What is the core concept of **Immutable Infrastructure**?",
      "options": [
        "A) Servers are never backed up",
        "B) Servers are never modified after deployment; updates are done by replacing the server",
        "C) Only static files are stored on servers",
        "D) All configurations are stored in a database"
      ],
      "correct": "B"
    },
    {
      "id": "Q41",
      "marks": 3,
      "text": "The term **Bias-Variance Trade-off** refers to balancing:",
      "options": [
        "A) Training speed and testing speed",
        "B) Underfitting and Overfitting",
        "C) Model size and memory usage",
        "D) CPU and GPU resources"
      ],
      "correct": "B"
    },
    {
      "id": "Q42",
      "marks": 3,
      "text": "Which technique is used to measure the difference between the model's prediction and the actual value (e.g., MSE or Cross-Entropy)?",
      "options": [
        "A) Optimizer",
        "B) Loss Function (Cost Function)",
        "C) Activation Function",
        "D) Regularization"
      ],
      "correct": "B"
    },
    {
      "id": "Q43",
      "marks": 3,
      "text": "What is the purpose of the HTTP **GET** method?",
      "options": [
        "A) Create a new resource",
        "B) Retrieve data from a resource",
        "C) Update a resource",
        "D) Delete a resource"
      ],
      "correct": "B"
    },
    {
      "id": "Q44",
      "marks": 3,
      "text": "Which language is primarily used for defining the structure and content of web pages?",
      "options": [
        "A) CSS",
        "B) JavaScript",
        "C) HTML",
        "D) Python"
      ],
      "correct": "C"
    },
    {
      "id": "Q45",
      "marks": 3,
      "text": "What is the output of `2 % 3` in Python?",
      "options": [
        "A) 0.66",
        "B) 2",
        "C) 1",
        "D) Error"
      ],
      "correct": "B"
    },
    {
      "id": "Q46",
      "marks": 3,
      "text": "In object-oriented programming, what is **Inheritance**?",
      "options": [
        "A) Bundling data and methods",
        "B) Creating objects from classes",
        "C) Mechanism for a class to acquire properties of another class",
        "D) Hiding implementation details"
      ],
      "correct": "C"
    },
    {
      "id": "Q47",
      "marks": 3,
      "text": "Which operator performs an integer division in Python?",
      "options": [
        "A) `/`",
        "B) `//`",
        "C) `%`",
        "D) `*`"
      ],
      "correct": "B"
    },
    {
      "id": "Q48",
      "marks": 3,
      "text": "What is the maximum height of a complete binary tree with $N$ nodes?",
      "options": [
        "A) $N$",
        "B) $N/2$",
        "C) $\log_2 N$",
        "D) $2^N$"
      ],
      "correct": "C"
    },
    {
      "id": "Q49",
      "marks": 3,
      "text": "In a queue, which operation adds an element?",
      "options": [
        "A) Pop",
        "B) Dequeue",
        "C) Enqueue",
        "D) Peek"
      ],
      "correct": "C"
    },
    {
      "id": "Q50",
      "marks": 3,
      "text": "What is the time complexity of accessing an element in an array by its index?",
      "options": [
        "A) $O(n)$",
        "B) $O(\log n)$",
        "C) $O(1)$",
        "D) $O(n^2)$"
      ],
      "correct": "C"
    },
    {
      "id": "Q51",
      "marks": 3,
      "text": "The memory where the operating system and currently running programs reside is:",
      "options": [
        "A) Hard Disk",
        "B) Cache",
        "C) RAM (Primary Memory)",
        "D) Flash Drive"
      ],
      "correct": "C"
    },
    {
      "id": "Q52",
      "marks": 3,
      "text": "What protocol is used to securely transfer files over a network?",
      "options": [
        "A) HTTP",
        "B) FTP",
        "C) SSH",
        "D) SFTP"
      ],
      "correct": "D"
    },
    {
      "id": "Q53",
      "marks": 3,
      "text": "Which cloud deployment model refers to services offered over a public network?",
      "options": [
        "A) Private Cloud",
        "B) Hybrid Cloud",
        "C) Public Cloud",
        "D) Community Cloud"
      ],
      "correct": "C"
    },
    {
      "id": "Q54",
      "marks": 3,
      "text": "What does IaC stand for?",
      "options": [
        "A) Internal Access Control",
        "B) Infrastructure as Code",
        "C) Internet and Cloud",
        "D) Intelligent Application Center"
      ],
      "correct": "B"
    },
    {
      "id": "Q55",
      "marks": 3,
      "text": "Which metric is generally used to evaluate a **binary classification** model?",
      "options": [
        "A) R-squared",
        "B) Accuracy",
        "C) RMSE",
        "D) MAE"
      ],
      "correct": "B"
    },
    {
      "id": "Q56",
      "marks": 3,
      "text": "What is the primary role of an **optimizer** (e.g., Adam) in an ML model?",
      "options": [
        "A) Calculate error",
        "B) Store data",
        "C) Adjust model weights to minimize loss",
        "D) Load datasets"
      ],
      "correct": "C"
    },
    {
      "id": "Q57",
      "marks": 3,
      "text": "The term **LLM** stands for:",
      "options": [
        "A) Low Level Machine",
        "B) Logical Language Model",
        "C) Large Language Model",
        "D) Live Learning Method"
      ],
      "correct": "C"
    },
    {
      "id": "Q58",
      "marks": 3,
      "text": "What is the purpose of the **WHERE** clause in a SQL query?",
      "options": [
        "A) Select columns",
        "B) Group results",
        "C) Filter records",
        "D) Order results"
      ],
      "correct": "C"
    },
    {
      "id": "Q59",
      "marks": 3,
      "text": "Which component manages processes and resources in a computer?",
      "options": [
        "A) Compiler",
        "B) Interpreter",
        "C) Operating System",
        "D) Application Software"
      ],
      "correct": "C"
    },
    {
      "id": "Q60",
      "marks": 3,
      "text": "What is the value of $2^5$?",
      "options": [
        "A) 10",
        "B) 16",
        "C) 32",
        "D) 64"
      ],
      "correct": "C"
    },
    {
      "id": "Q61",
      "marks": 3,
      "text": "In Python, which function is used to convert a number to a string?",
      "options": [
        "A) `int()`",
        "B) `str()`",
        "C) `list()`",
        "D) `float()`"
      ],
      "correct": "B"
    },
    {
      "id": "Q62",
      "marks": 3,
      "text": "Which HTTP status code indicates a successful request?",
      "options": [
        "A) 404",
        "B) 500",
        "C) 200",
        "D) 301"
      ],
      "correct": "C"
    },
    {
      "id": "Q63",
      "marks": 3,
      "text": "What is the standard port for HTTPS?",
      "options": [
        "A) 80",
        "B) 443",
        "C) 21",
        "D) 22"
      ],
      "correct": "B"
    },
    {
      "id": "Q64",
      "marks": 3,
      "text": "What is a **Boolean** data type used for?",
      "options": [
        "A) Storing large text",
        "B) Storing floating-point numbers",
        "C) Storing True or False values",
        "D) Storing dates"
      ],
      "correct": "C"
    },
    {
      "id": "Q65",
      "marks": 3,
      "text": "Which protocol is connection-oriented and reliable?",
      "options": [
        "A) UDP",
        "B) IP",
        "C) TCP",
        "D) ICMP"
      ],
      "correct": "C"
    },
    {
      "id": "Q66",
      "marks": 3,
      "text": "In AWS, what is the region?",
      "options": [
        "A) A single data center",
        "B) A physical location with multiple AZs",
        "C) A server instance",
        "D) A network segment"
      ],
      "correct": "B"
    },
    {
      "id": "Q67",
      "marks": 3,
      "text": "Which service is a Content Delivery Network (CDN)?",
      "options": [
        "A) Route 53",
        "B) CloudFront",
        "C) S3",
        "D) EC2"
      ],
      "correct": "B"
    },
    {
      "id": "Q68",
      "marks": 3,
      "text": "Which ML task involves generating new data samples?",
      "options": [
        "A) Classification",
        "B) Regression",
        "C) Generative AI",
        "D) Clustering"
      ],
      "correct": "C"
    },
    {
      "id": "Q69",
      "marks": 3,
      "text": "Which layer is typically added before the output layer in a Deep Learning classification network?",
      "options": [
        "A) Input Layer",
        "B) Hidden Layer",
        "C) Output Layer",
        "D) Dropout Layer"
      ],
      "correct": "B"
    },
    {
      "id": "Q70",
      "marks": 3,
      "text": "What is the primary goal of **DevOps**?",
      "options": [
        "A) Separate development and operations",
        "B) Speed up the software delivery lifecycle",
        "C) Write less code",
        "D) Only focus on security"
      ],
      "correct": "B"
    },
    {
      "id": "Q71",
      "marks": 3,
      "text": "What is the result of `3 << 1` (Bitwise left shift)?",
      "options": [
        "A) 1",
        "B) 3",
        "C) 6",
        "D) 4"
      ],
      "correct": "C"
    },
    {
      "id": "Q72",
      "marks": 3,
      "text": "The memory where the operating system and currently running programs reside is:",
      "options": [
        "A) Hard Disk",
        "B) Cache",
        "C) RAM (Primary Memory)",
        "D) Flash Drive"
      ],
      "correct": "C"
    },
    {
      "id": "Q73",
      "marks": 3,
      "text": "The `ceil()` function in Python's `math` module returns:",
      "options": [
        "A) The nearest integer",
        "B) The smallest integer greater than or equal to a number",
        "C) The largest integer less than or equal to a number",
        "D) The floor value"
      ],
      "correct": "B"
    },
    {
      "id": "Q74",
      "marks": 3,
      "text": "What is the function of the **GROUP BY** clause in SQL?",
      "options": [
        "A) Filter rows",
        "B) Combine rows based on a common value",
        "C) Join tables",
        "D) Sort the output"
      ],
      "correct": "B"
    },
    {
      "id": "Q75",
      "marks": 3,
      "text": "In the C language, what is the primary purpose of a **pointer**?",
      "options": [
        "A) To store floating-point numbers",
        "B) To store the memory address of another variable",
        "C) To define functions",
        "D) To manage files"
      ],
      "correct": "B"
    },
    {
      "id": "Q76",
      "marks": 3,
      "text": "What is the primary function of the **kernel** in an operating system?",
      "options": [
        "A) User interface",
        "B) Core component managing hardware and system resources",
        "C) Application installer",
        "D) Web browser"
      ],
      "correct": "B"
    },
    {
      "id": "Q77",
      "marks": 3,
      "text": "Which access modifier in OOP restricts access to members within the same class only?",
      "options": [
        "A) Public",
        "B) Protected",
        "C) Private",
        "D) Default"
      ],
      "correct": "C"
    },
    {
      "id": "Q78",
      "marks": 3,
      "text": "What does CSS primarily handle on a web page?",
      "options": [
        "A) Structure",
        "B) Logic/Behavior",
        "C) Presentation/Styling",
        "D) Database connection"
      ],
      "correct": "C"
    },
    {
      "id": "Q79",
      "marks": 3,
      "text": "Which data type is used to store unstructured or semi-structured data in databases like DynamoDB?",
      "options": [
        "A) Integer",
        "B) Float",
        "C) JSON/Document",
        "D) Boolean"
      ],
      "correct": "C"
    },
    {
      "id": "Q80",
      "marks": 3,
      "text": "Which sorting algorithm is an example of an $O(n^2)$ algorithm?",
      "options": [
        "A) Merge Sort",
        "B) Insertion Sort",
        "C) Heap Sort",
        "D) Quick Sort (Average)"
      ],
      "correct": "B"
    },
    {
      "id": "Q81",
      "marks": 3,
      "text": "What is the purpose of the **JOIN** clause in SQL?",
      "options": [
        "A) Delete records",
        "B) Combine rows from two or more tables",
        "C) Filter records",
        "D) Create a new table"
      ],
      "correct": "B"
    },
    {
      "id": "Q82",
      "marks": 3,
      "text": "Which concept relates to a piece of code that defines reusable code blocks with input and output?",
      "options": [
        "A) Variable",
        "B) Loop",
        "C) Function",
        "D) Array"
      ],
      "correct": "C"
    },
    {
      "id": "Q83",
      "marks": 3,
      "text": "What is the base of the logarithm in $O(\log n)$ complexity, if not specified?",
      "options": [
        "A) 10",
        "B) $e$ (Natural log)",
        "C) 2",
        "D) 1"
      ],
      "correct": "C"
    },
    {
      "id": "Q84",
      "marks": 3,
      "text": "Which component of an LLM is responsible for calculating the probability of the next word?",
      "options": [
        "A) Encoder",
        "B) Decoder",
        "C) Attention head",
        "D) Tokenizer"
      ],
      "correct": "B"
    },
    {
      "id": "Q85",
      "marks": 3,
      "text": "What is the result of $10 \land 5$ (Bitwise AND)?",
      "options": [
        "A) 15",
        "B) 0",
        "C) 10",
        "D) 5"
      ],
      "correct": "B"
    },
    {
      "id": "Q86",
      "marks": 3,
      "text": "In a simple linked list, what is the role of the 'Next' pointer?",
      "options": [
        "A) Point to the previous node",
        "B) Point to the current node",
        "C) Point to the subsequent node",
        "D) Point to the head"
      ],
      "correct": "C"
    },
    {
      "id": "Q87",
      "marks": 3,
      "text": "What does a compiler do?",
      "options": [
        "A) Executes code line by line",
        "B) Translates high-level code into machine code all at once",
        "C) Debugs code",
        "D) Designs UI"
      ],
      "correct": "B"
    },
    {
      "id": "Q88",
      "marks": 3,
      "text": "Which type of error occurs when the program runs but produces an incorrect result?",
      "options": [
        "A) Syntax Error",
        "B) Runtime Error",
        "C) Logical Error",
        "D) Compilation Error"
      ],
      "correct": "C"
    },
    {
      "id": "Q89",
      "marks": 3,
      "text": "What is a **daemon** in the context of operating systems?",
      "options": [
        "A) A user-facing application",
        "B) A background process running without user interaction",
        "C) A type of error",
        "D) A hardware driver"
      ],
      "correct": "B"
    },
    {
      "id": "Q90",
      "marks": 3,
      "text": "What is the primary role of a **tokenizer** in NLP/LLMs?",
      "options": [
        "A) Generate text",
        "B) Convert raw text into numerical tokens (units)",
        "C) Perform translation",
        "D) Classify text"
      ],
      "correct": "B"
    },
    {
      "id": "Q91",
      "marks": 3,
      "text": "What is the output of the nested loop? (1+2+3=6) \n```python\ntotal = 0\nfor i in range(1, 4):\n    for j in range(i):\n        total += 1\nprint(total)\n```",
      "options": [
        "A) 3",
        "B) 6",
        "C) 9",
        "D) 12"
      ],
      "correct": "B"
    },
    {
      "id": "Q92",
      "marks": 3,
      "text": "How many times will the number $5$ be printed? \n```python\ncount = 0\nwhile count < 10:\n    if count % 2 == 1:\n        count += 2\n        continue\n    if count == 6:\n        break\n    print(5, end='')\n    count += 1\n```",
      "options": [
        "A) 6",
        "B) 3",
        "C) 4",
        "D) 5"
      ],
      "correct": "C"
    },
    {
      "id": "Q93",
      "marks": 3,
      "text": "Which AWS service is used for registering and managing domain names?",
      "options": [
        "A) S3",
        "B) Route 53",
        "C) CloudFront",
        "D) IAM"
      ],
      "correct": "B"
    },
    {
      "id": "Q94",
      "marks": 3,
      "text": "What is **Feature Scaling** (e.g., Normalization/Standardization) primarily used for?",
      "options": [
        "A) Reducing the number of features",
        "B) Ensuring all features contribute equally to the distance calculation in algorithms",
        "C) Generating new features",
        "D) Speeding up data loading"
      ],
      "correct": "B"
    },
    {
      "id": "Q95",
      "marks": 3,
      "text": "What does $O(1)$ notation imply in terms of execution time?",
      "options": [
        "A) The time grows linearly with input size",
        "B) The time is constant, regardless of the input size",
        "C) The time is dependent on the square of the input size",
        "D) The time grows logarithmically"
      ],
      "correct": "B"
    },
    {
      "id": "Q96",
      "marks": 3,
      "text": "In Python, which function is used to convert a number to a string?",
      "options": [
        "A) `int()`",
        "B) `str()`",
        "C) `list()`",
        "D) `float()`"
      ],
      "correct": "B"
    },
    {
      "id": "Q97",
      "marks": 3,
      "text": "What is the purpose of the **DELETE** statement in SQL?",
      "options": [
        "A) Remove a table",
        "B) Remove selected rows from a table",
        "C) Remove a column",
        "D) Remove a database"
      ],
      "correct": "B"
    },
    {
      "id": "Q98",
      "marks": 3,
      "text": "What is the result of `~5` in Python (Bitwise NOT/One's Complement)?",
      "options": [
        "A) 5",
        "B) -5",
        "C) 6",
        "D) -6"
      ],
      "correct": "D"
    },
    {
      "id": "Q99",
      "marks": 3,
      "text": "What is the primary role of a **router** in a network?",
      "options": [
        "A) Connect devices in a single LAN",
        "B) Filter packets based on MAC address",
        "C) Forward data packets between different networks",
        "D) Provide power over Ethernet"
      ],
      "correct": "C"
    },
    {
      "id": "Q100",
      "marks": 3,
      "text": "What is the sum of the geometric progression $1 + 2 + 4 + ... + 2^2$?",
      "options": [
        "A) 4",
        "B) 7",
        "C) 8",
        "D) 6"
      ],
      "correct": "B"
   },


  // ===================== 4-MARK QUESTIONS (10) =====================

   {
     "id": "Q101",
      "marks": 4,
      "text": "Identify the error:\n\ndef add(a, b=2, c):\n    return a + b + c",
      "options": [
        "A) Default argument before non-default",
        "B) Missing return",
        "C) Syntax is correct",
        "D) Too many arguments"
      ],
      "correct": "A"
    },
    {
      "id": "Q102",
      "marks": 4,
      "text": "Which of these function calls is valid if sum is defined as def sum(a, b)?",
      "options": [
        "A) sum(a, b)",
        "B) sum(3, 4)",
        "C) sum(a=3, 4)",
        "D) sum(,3,4)"
      ],
      "correct": "B"
    },
    {
      "id": "Q103",
      "marks": 4,
      "text": "Which algorithm is best for searching in a sorted array?",
      "options": [
        "A) Linear Search",
        "B) Binary Search",
        "C) Bubble Sort",
        "D) Merge Sort"
      ],
      "correct": "B"
    },
    {
      "id": "Q104",
      "marks": 4,
      "text": "Best sorting algorithm for almost-sorted data?",
      "options": [
        "A) Quick Sort",
        "B) Insertion Sort",
        "C) Merge Sort",
        "D) Heap Sort"
      ],
      "correct": "B"
    },
    {
      "id": "Q105",
      "marks": 4,
      "text": "Confusion Matrix is used to calculate:",
      "options": [
        "A) Accuracy",
        "B) Cost function",
        "C) Mean Squared Error (MSE)",
        "D) Precision/Recall/Accuracy"
      ],
      "correct": "D"
    },
    {
      "id": "Q106",
      "marks": 4,
      "text": "Which ML model predicts continuous values?",
      "options": [
        "A) Classification",
        "B) Regression",
        "C) Clustering",
        "D) Segmentation"
      ],
      "correct": "B"
    },
    {
      "id": "Q107",
      "marks": 4,
      "text": "Which statement is true about LLM APIs (like OpenAI / Gemini)?",
      "options": [
        "A) Always local models",
        "B) Always cloud hosted",
        "C) Run without internet",
        "D) Need manual training every time"
      ],
      "correct": "B"
    },
    {
      "id": "Q108",
      "marks": 4,
      "text": "Which approach is most suitable for finding the shortest path in a weighted graph with **no negative edge weights**?",
      "options": [
        "A) Bellman-Ford Algorithm",
        "B) Floyd-Warshall Algorithm",
        "C) Dijkstra's Algorithm",
        "D) Prim's Algorithm"
      ],
      "correct": "C"
    },
    {
      "id": "Q109",
      "marks": 4,
      "text": "What is the main purpose of an **AWS VPC (Virtual Private Cloud)**?",
      "options": [
        "A) Global Content Delivery Network",
        "B) Isolating a logically defined section of the AWS Cloud for resources",
        "C) Managed database hosting",
        "D) Serverless compute function"
      ],
      "correct": "B"
    },
    {
      "id": "Q110",
      "marks": 4,
      "text": "Which sorting algorithm is guaranteed to be **stable** (maintains relative order of equal keys)?",
      "options": [
        "A) Quick Sort",
        "B) Heap Sort",
        "C) Merge Sort",
        "D) Selection Sort"
      ],
      "correct": "C"
    },
    {
      "id": "Q111",
      "marks": 4,
      "text": "Which of the following is an example of a **higher-order function** in Python?",
      "options": [
        "A) `len()`",
        "B) `print()`",
        "C) `map()`",
        "D) `range()`"
      ],
      "correct": "C"
    },
    {
      "id": "Q112",
      "marks": 4,
      "text": "Identify the issue in the following code for exception handling: \n```python\ntry:\n    x = 1 / 0\nexcept ValueError:\n    print(\"Error\")\n```",
      "options": [
        "A) `try` block is missing a `finally`",
        "B) The exception type is incorrect for the division by zero",
        "C) The code is syntactically correct and will handle the error",
        "D) Variables must be initialized outside `try`"
      ],
      "correct": "B"
    },
    {
      "id": "Q113",
      "marks": 4,
      "text": "What is the primary purpose of the `__init__` method in a Python class?",
      "options": [
        "A) To finalize the object before deletion",
        "B) To define class-level variables",
        "C) To construct and initialize object attributes",
        "D) To handle errors"
      ],
      "correct": "C"
    },
    {
      "id": "Q114",
      "marks": 4,
      "text": "The in-order traversal of a Binary Search Tree (BST) always results in:",
      "options": [
        "A) Reverse-sorted order",
        "B) A random order",
        "C) Sorted order",
        "D) Breadth-first order"
      ],
      "correct": "C"
    },
    {
      "id": "Q115",
      "marks": 4,
      "text": "A **spanning tree** of a connected, undirected graph G is:",
      "options": [
        "A) A subgraph that is a path",
        "B) A subgraph that includes all vertices of G and is a tree",
        "C) A subgraph that includes all edges of G",
        "D) A subgraph with the maximum number of edges"
      ],
      "correct": "B"
    },
    {
      "id": "Q116",
      "marks": 4,
      "text": "Which sorting algorithm has a worst-case time complexity of $O(n^2)$ but a best-case (and average) of $O(n \log n)$?",
      "options": [
        "A) Merge Sort",
        "B) Quick Sort",
        "C) Bubble Sort",
        "D) Selection Sort"
      ],
      "correct": "B"
    },
    {
      "id": "Q117",
      "marks": 4,
      "text": "What is a **Trie** (Prefix Tree) primarily optimized for?",
      "options": [
        "A) Fast insertion into a list",
        "B) Searching for exact numerical matches",
        "C) Efficient prefix-based string searching and dictionary operations",
        "D) Maintaining a sorted order of elements"
      ],
      "correct": "C"
    },
    {
      "id": "Q118",
      "marks": 4,
      "text": "What is the **maximum number of edges** in a simple, undirected graph with $V$ vertices?",
      "options": [
        "A) $V^2$",
        "B) $V(V-1)$",
        "C) $\\frac{V(V-1)}{2}$",
        "D) $V!$"
      ],
      "correct": "C"
    },
    {
      "id": "Q119",
      "marks": 4,
      "text": "What is the key benefit of using **Infrastructure as Code (IaC)** tools like Terraform or AWS CloudFormation?",
      "options": [
        "A) Manual provisioning of resources",
        "B) Versioning and reproducibility of infrastructure",
        "C) Complete elimination of cloud costs",
        "D) Only supporting proprietary AWS services"
      ],
      "correct": "B"
    },
    {
      "id": "Q120",
      "marks": 4,
      "text": "What is the primary difference between **Continuous Delivery** and **Continuous Deployment**?",
      "options": [
        "A) Delivery requires manual approval for production, Deployment is fully automated",
        "B) Deployment requires manual approval, Delivery is fully automated",
        "C) They are synonyms",
        "D) Delivery is for code compilation, Deployment is for testing"
      ],
      "correct": "A"
    },
    {
      "id": "Q121",
      "marks": 4,
      "text": "What is the primary function of a **Convolutional Layer** in a Convolutional Neural Network (CNN)?",
      "options": [
        "A) To handle sequential data",
        "B) To perform global pooling",
        "C) To automatically learn spatial hierarchies of features from data",
        "D) To classify the final output"
      ],
      "correct": "C"
    },
    {
      "id": "Q122",
      "marks": 4,
      "text": "What does a **high Recall** value indicate in a classification model?",
      "options": [
        "A) Few false negatives (the model is good at finding all positive samples)",
        "B) Few false positives",
        "C) High overall accuracy",
        "D) The model is fast"
      ],
      "correct": "A"
    },
    {
      "id": "Q123",
      "marks": 4,
      "text": "The problem of **vanishing gradients** is typically addressed in Recurrent Neural Networks (RNNs) by using which architectures?",
      "options": [
        "A) Perceptrons",
        "B) Convolutional Layers",
        "C) Long Short-Term Memory (LSTM) or Gated Recurrent Unit (GRU)",
        "D) Simple Feed-Forward Networks"
      ],
      "correct": "C"
    },
    {
      "id": "Q124",
      "marks": 4,
      "text": "Which Python concept allows a function to remember the state of variables from its enclosing scope even after the outer function has finished execution?",
      "options": [
        "A) Decorator",
        "B) Generator",
        "C) Closure",
        "D) Static method"
      ],
      "correct": "C"
    },
    {
      "id": "Q125",
      "marks": 4,
      "text": "Which method is typically used to implement the iteration protocol for objects in Python, allowing them to be used in a `for` loop?",
      "options": [
        "A) `__new__` and `__del__`",
        "B) `__call__` and `__init__`",
        "C) `__iter__` and `__next__`",
        "D) `__add__` and `__sub__`"
      ],
      "correct": "C"
    },
    {
      "id": "Q126",
      "marks": 4,
      "text": "In Python, what does the **`yield`** keyword do when used inside a function?",
      "options": [
        "A) It causes a hard crash",
        "B) It defines an asynchronous function",
        "C) It turns the function into a generator",
        "D) It immediately returns `None`"
      ],
      "correct": "C"
    },
    {
      "id": "Q127",
      "marks": 4,
      "text": "When implementing concurrent tasks in Python, which library is best suited for parallelizing CPU-bound computations?",
      "options": [
        "A) `asyncio`",
        "B) `threading`",
        "C) `multiprocessing`",
        "D) `os`"
      ],
      "correct": "C"
    },
    {
      "id": "Q128",
      "marks": 4,
      "text": "Which type of error occurs when resources like memory run out, often due to infinite recursion?",
      "options": [
        "A) Syntax Error",
        "B) ZeroDivisionError",
        "C) OverflowError / RecursionError",
        "D) NameError"
      ],
      "correct": "C"
    },
    {
      "id": "Q129",
      "marks": 4,
      "text": "Which data structure in Python is typically implemented as a hash map and provides $O(1)$ average time complexity for insertion, deletion, and lookup?",
      "options": [
        "A) List",
        "B) Tuple",
        "C) Dictionary",
        "D) Linked List"
      ],
      "correct": "C"
    },
    {
      "id": "Q130",
      "marks": 4,
      "text": "Which built-in function is often paired with a lambda function to filter elements from an iterable based on a specific condition?",
      "options": [
        "A) `map()`",
        "B) `reduce()`",
        "C) `filter()`",
        "D) `sum()`"
      ],
      "correct": "C"
    },
    {
      "id": "Q131",
      "marks": 4,
      "text": "Which attribute of a function allows you to inspect the number of arguments it requires?",
      "options": [
        "A) `func.__name__`",
        "B) `func.__doc__`",
        "C) `func.__code__.co_argcount`",
        "D) `func.arguments`"
      ],
      "correct": "C"
    },
    {
      "id": "Q132",
      "marks": 4,
      "text": "In Python, a **decorator** is syntactically sugar for:",
      "options": [
        "A) A recursive function call",
        "B) Passing a function as an argument to another function and assigning the result",
        "C) Defining a class method",
        "D) A context manager"
      ],
      "correct": "B"
    },
    {
      "id": "Q133",
      "marks": 4,
      "text": "What is a **Context Manager** primarily used for in Python (e.g., using the `with` statement)?",
      "options": [
        "A) Managing global variables",
        "B) Ensuring resources are properly set up and torn down (e.g., file handling)",
        "C) Handling infinite loops",
        "D) Defining abstract classes"
      ],
      "correct": "B"
    },
    {
      "id": "Q134",
      "marks": 4,
      "text": "What is the fundamental concept behind Python's garbage collection?",
      "options": [
        "A) Mark and Sweep",
        "B) Reference Counting",
        "C) Generational Garbage Collection",
        "D) Both A and B (Hybrid approach)"
      ],
      "correct": "D"
    },
    {
      "id": "Q135",
      "marks": 4,
      "text": "Which module is essential for working with regular expressions in Python?",
      "options": [
        "A) `math`",
        "B) `os`",
        "C) `re`",
        "D) `sys`"
      ],
      "correct": "C"
    },
    {
      "id": "Q136",
      "marks": 4,
      "text": "Which Python library is most commonly used for scientific computing and working with high-performance arrays?",
      "options": [
        "A) Pandas",
        "B) Matplotlib",
        "C) NumPy",
        "D) Scikit-learn"
      ],
      "correct": "C"
    },
    {
      "id": "Q137",
      "marks": 4,
      "text": "What is the time complexity to insert a node at the beginning of a singly **Linked List**?",
      "options": [
        "A) $O(\\log n)$",
        "B) $O(n)$",
        "C) $O(1)$",
        "D) $O(n^2)$"
      ],
      "correct": "C"
    },
    {
      "id": "Q138",
      "marks": 4,
      "text": "What is the maximum number of children a node can have in a **Binary Tree**?",
      "options": [
        "A) 1",
        "B) 2",
        "C) 3",
        "D) $N$ (unlimited)"
      ],
      "correct": "B"
    },
    {
      "id": "Q139",
      "marks": 4,
      "text": "What is the time complexity for a worst-case **search** operation in a Binary Search Tree (BST) that is completely unbalanced (skewed)?",
      "options": [
        "A) $O(1)$",
        "B) $O(\\log n)$",
        "C) $O(n)$",
        "D) $O(n \\log n)$"
      ],
      "correct": "C"
    },
    {
      "id": "Q140",
      "marks": 4,
      "text": "What is the average-case time complexity of **Quick Sort**?",
      "options": [
        "A) $O(n^2)$",
        "B) $O(n)$",
        "C) $O(n \\log n)$",
        "D) $O(\\log n)$"
      ],
      "correct": "C"
    },
    {
      "id": "Q141",
      "marks": 4,
      "text": "Which graph representation is more memory-efficient for a **sparse graph** (few edges)?",
      "options": [
        "A) Adjacency Matrix",
        "B) Adjacency List",
        "C) Incidence Matrix",
        "D) Edge List"
      ],
      "correct": "B"
    },
    {
      "id": "Q142",
      "marks": 4,
      "text": "Which data structure is essential for implementing a Least Recently Used (**LRU** Cache)?",
      "options": [
        "A) Priority Queue and Array",
        "B) Hash Map and Doubly Linked List",
        "C) Queue and Stack",
        "D) Binary Search Tree"
      ],
      "correct": "B"
    },
    {
      "id": "Q143",
      "marks": 4,
      "text": "**Depth-First Search (DFS)** can be implemented easily using which data structure to store nodes to visit?",
      "options": [
        "A) Queue",
        "B) Heap",
        "C) Stack",
        "D) Hash Table"
      ],
      "correct": "C"
    },
    {
      "id": "Q144",
      "marks": 4,
      "text": "What is the main drawback of using **adjacency matrix** representation for a graph?",
      "options": [
        "A) Slower traversal (DFS/BFS)",
        "B) High memory consumption for sparse graphs",
        "C) Inability to store weights",
        "D) Difficulty in adding new vertices"
      ],
      "correct": "B"
    },
    {
      "id": "Q145",
      "marks": 4,
      "text": "Which traversal method visits the root, then the left subtree, then the right subtree?",
      "options": [
        "A) Pre-order",
        "B) In-order",
        "C) Post-order",
        "D) Level-order"
      ],
      "correct": "A"
    },
    {
      "id": "Q146",
      "marks": 4,
      "text": "What is the defining characteristic of a **B-Tree** (often used in databases)?",
      "options": [
        "A) Every node has at most two children",
        "B) All nodes must contain data",
        "C) All leaf nodes are at the same level",
        "D) It only stores integers"
      ],
      "correct": "C"
    },
    {
      "id": "Q147",
      "marks": 4,
      "text": "What is the time complexity to find the median of a sorted array?",
      "options": [
        "A) $O(n)$",
        "B) $O(\\log n)$",
        "C) $O(1)$",
        "D) $O(n^2)$"
      ],
      "correct": "C"
    },
    {
      "id": "Q148",
      "marks": 4,
      "text": "What is a **Topological Sort** useful for?",
      "options": [
        "A) Finding the shortest path in any graph",
        "B) Finding cycles in a graph",
        "C) Ordering tasks or nodes in a Directed Acyclic Graph (DAG)",
        "D) Calculating the minimum spanning tree"
      ],
      "correct": "C"
    },
    {
      "id": "Q149",
      "marks": 4,
      "text": "What is the principle of **Locality of Reference** which is important for cache efficiency?",
      "options": [
        "A) Data items accessed recently are likely to be accessed again soon (Temporal)",
        "B) Data items stored near a recently accessed item are likely to be accessed soon (Spatial)",
        "C) Both A and B",
        "D) Data must be stored in a linked list"
      ],
      "correct": "C"
    },
    {
      "id": "Q150",
      "marks": 4,
      "text": "What is the key to achieving $O(\\log n)$ complexity in **Binary Search**?",
      "options": [
        "A) Using recursion",
        "B) The data must be sorted",
        "C) The data must be stored in a linked list",
        "D) The algorithm runs in parallel"
      ],
      "correct": "B"
    },
    {
      "id": "Q151",
      "marks": 4,
      "text": "If the sum of the digits of a number is divisible by 9, the original number is also divisible by 9. This is an example of:",
      "options": [
        "A) Induction",
        "B) Deduction",
        "C) Divisibility Rule",
        "D) Principle of inclusion-exclusion"
      ],
      "correct": "C"
    },
    {
      "id": "Q152",
      "marks": 4,
      "text": "A clock is set correctly at 12:00 PM. The clock loses 20 minutes every hour. What time will the clock show when the actual time is 12:00 AM the next day (12 hours later)?",
      "options": [
        "A) 8:00 PM",
        "B) 9:00 PM",
        "C) 4:00 AM",
        "D) 10:00 PM"
      ],
      "correct": "A"
    },
    {
      "id": "Q153",
      "marks": 4,
      "text": "What is the pattern? \n```python\nfor i in range(1, 4):\n    for j in range(1, i + 1):\n        print(j, end='')\n    print()\n```",
      "options": [
        "A) 1, 12, 123",
        "B) 1, 22, 333",
        "C) 123, 12, 1",
        "D) 1, 21, 321"
      ],
      "correct": "A"
    },
    {
      "id": "Q154",
      "marks": 4,
      "text": "What is the sum of the geometric progression $1 + 2 + 4 + ... + 2^n$ ?",
      "options": [
        "A) $2^{n+1}$",
        "B) $2^{n+1} - 1$",
        "C) $2^n - 1$",
        "D) $2n$"
      ],
      "correct": "B"
    },
    {
      "id": "Q155",
      "marks": 4,
      "text": "What is the next logical step in solving a complex problem using the **Divide and Conquer** paradigm after dividing the problem?",
      "options": [
        "A) Combine the solutions",
        "B) Solve the subproblems recursively",
        "C) Check for edge cases",
        "D) Perform a linear search"
      ],
      "correct": "B"
    },
    {
      "id": "Q156",
      "marks": 4,
      "text": "Which logical connective is only true if both inputs have different truth values?",
      "options": [
        "A) Conjunction (AND)",
        "B) Disjunction (OR)",
        "C) Exclusive OR (XOR)",
        "D) Implication"
      ],
      "correct": "C"
    },
    {
      "id": "Q157",
      "marks": 4,
      "text": "Which component in a CI/CD pipeline is responsible for running automated checks to ensure the code meets quality standards?",
      "options": [
        "A) Deployment Stage",
        "B) Source Control",
        "C) Build Stage",
        "D) Testing Stage (Continuous Testing)"
      ],
      "correct": "D"
    },
    {
      "id": "Q158",
      "marks": 4,
      "text": "Which AWS service provides a fully managed, scalable **NoSQL database** service?",
      "options": [
        "A) AWS RDS",
        "B) Amazon DynamoDB",
        "C) AWS Aurora",
        "D) AWS Redshift"
      ],
      "correct": "B"
    },
    {
      "id": "Q159",
      "marks": 4,
      "text": "In the context of CI/CD, what is a **Git hook** used for?",
      "options": [
        "A) Deploying code to production",
        "B) Triggering custom scripts at certain Git events (e.g., commit, push)",
        "C) Monitoring cloud resources",
        "D) Running manual tests"
      ],
      "correct": "B"
    },
    {
      "id": "Q160",
      "marks": 4,
      "text": "What is an **Amazon Machine Image (AMI)** primarily used for?",
      "options": [
        "A) A template for creating a database instance",
        "B) A blueprint for launching an EC2 instance, including the OS and application server",
        "C) A security group rule definition",
        "D) A network interface configuration"
      ],
      "correct": "B"
    },
    {
      "id": "Q161",
      "marks": 4,
      "text": "In IaC using AWS CloudFormation, what is a **Stack**?",
      "options": [
        "A) A collection of servers running a single application",
        "B) A queue of cloud events",
        "C) A single unit containing all AWS resources defined by a template",
        "D) A reserved IP address block"
      ],
      "correct": "C"
    },
    {
      "id": "Q162",
      "marks": 4,
      "text": "What is a **Web Application Firewall (WAF)** primarily designed to protect against?",
      "options": [
        "A) Denial of Service (DoS) attacks at the network layer",
        "B) SQL injection and Cross-Site Scripting (XSS) at the application layer",
        "C) Viruses on EC2 instances",
        "D) Database corruption"
      ],
      "correct": "B"
    },
    {
      "id": "Q163",
      "marks": 4,
      "text": "Which AWS service is essential for **monitoring, logging, and performance metrics** across your cloud resources?",
      "options": [
        "A) AWS KMS",
        "B) AWS CloudWatch",
        "C) AWS Inspector",
        "D) AWS Config"
      ],
      "correct": "B"
    },
    {
      "id": "Q164",
      "marks": 4,
      "text": "Which network component controls inbound and outbound traffic at the **subnet level** in an AWS VPC?",
      "options": [
        "A) Security Group",
        "B) Network Access Control List (NACL)",
        "C) Internet Gateway",
        "D) Route Table"
      ],
      "correct": "B"
    },
    {
      "id": "Q165",
      "marks": 4,
      "text": "What is the primary role of the **Activation Function** in a neuron?",
      "options": [
        "A) To calculate the error",
        "B) To perform matrix multiplication",
        "C) To introduce non-linearity, allowing the network to learn complex patterns",
        "D) To normalize the input data"
      ],
      "correct": "C"
    },
    {
      "id": "Q166",
      "marks": 4,
      "text": "Which metric is used to evaluate the performance of a **Regression** model?",
      "options": [
        "A) Accuracy",
        "B) Confusion Matrix",
        "C) Mean Squared Error (MSE)",
        "D) Precision"
      ],
      "correct": "C"
    },
    {
      "id": "Q167",
      "marks": 4,
      "text": "Which type of Machine Learning is best suited for finding patterns or groupings in unlabeled data?",
      "options": [
        "A) Supervised Learning",
        "B) Unsupervised Learning",
        "C) Reinforcement Learning",
        "D) Semi-supervised Learning"
      ],
      "correct": "B"
    },
    {
      "id": "Q168",
      "marks": 4,
      "text": "In object-oriented programming, what is **Encapsulation**?",
      "options": [
        "A) Allowing classes to inherit properties",
        "B) Defining multiple methods with the same name",
        "C) Bundling data and methods that operate on the data into a single unit (class)",
        "D) Allowing objects to take many forms"
      ],
      "correct": "C"
    },
    {
      "id": "Q169",
      "marks": 4,
      "text": "What is the time complexity of the operation `pop()` on a list implemented as a dynamic array when it occurs at the end?",
      "options": [
        "A) $O(n)$ (worst case)",
        "B) $O(1)$ (amortized)",
        "C) $O(\\log n)$",
        "D) $O(n^2)$"
      ],
      "correct": "B"
    },
    {
      "id": "Q170",
      "marks": 4,
      "text": "Which data structure is typically used to implement a recursive function's call stack?",
      "options": [
        "A) Queue",
        "B) Array",
        "C) Stack",
        "D) Heap"
      ],
      "correct": "C"
    },
    {
      "id": "Q171",
      "marks": 4,
      "text": "What is the primary role of an **Internet Gateway** in AWS VPC?",
      "options": [
        "A) Filter network traffic (firewall)",
        "B) Connect the VPC to the public internet",
        "C) Allow communication between subnets",
        "D) Manage routing tables"
      ],
      "correct": "B"
    },
    {
      "id": "Q172",
      "marks": 4,
      "text": "Which type of neural network is specifically designed to handle sequential data, like time series or natural language?",
      "options": [
        "A) CNN (Convolutional Neural Network)",
        "B) RNN (Recurrent Neural Network)",
        "C) FFN (Feedforward Network)",
        "D) Autoencoder"
      ],
      "correct": "B"
    },
    {
      "id": "Q173",
      "marks": 4,
      "text": "Which HTTP method is typically used to update an existing resource entirely?",
      "options": [
        "A) GET",
        "B) POST",
        "C) PUT",
        "D) PATCH"
      ],
      "correct": "C"
    },
    {
      "id": "Q174",
      "marks": 4,
      "text": "What is the output of `2 ** 3 // 2`?",
      "options": [
        "A) 4.0",
        "B) 4",
        "C) 3",
        "D) 8"
      ],
      "correct": "B"
    },
    {
      "id": "Q175",
      "marks": 4,
      "text": "In Big-O notation, which growth rate is considered the most efficient?",
      "options": [
        "A) $O(n)$",
        "B) $O(n^2)$",
        "C) $O(\\log n)$",
        "D) $O(n!)$"
      ],
      "correct": "C"
    },
    {
      "id": "Q176",
      "marks": 4,
      "text": "What is the term for defining the state and allowed behavior of an object in OOP?",
      "options": [
        "A) Object",
        "B) Class",
        "C) Method",
        "D) Variable"
      ],
      "correct": "B"
    },
    {
      "id": "Q177",
      "marks": 4,
      "text": "What does the **ORDER BY** clause do in a SQL query?",
      "options": [
        "A) Selects data",
        "B) Groups results",
        "C) Sorts the result set",
        "D) Filters records"
      ],
      "correct": "C"
    },
    {
      "id": "Q178",
      "marks": 4,
      "text": "Which component of the CPU performs all arithmetic and logical operations?",
      "options": [
        "A) Control Unit (CU)",
        "B) Arithmetic Logic Unit (ALU)",
        "C) Cache",
        "D) Register"
      ],
      "correct": "B"
    },
    {
      "id": "Q179",
      "marks": 4,
      "text": "What is the primary function of a **load balancer** in a cloud environment?",
      "options": [
        "A) Store data",
        "B) Manage user login",
        "C) Distribute network traffic across multiple servers",
        "D) Run serverless functions"
      ],
      "correct": "C"
    },
    {
      "id": "Q180",
      "marks": 4,
      "text": "In a machine learning context, what is a **hyperparameter**?",
      "options": [
        "A) A parameter learned by the model during training",
        "B) A parameter set *before* the training process",
        "C) A type of loss function",
        "D) A feature of the input data"
      ],
      "correct": "B"
    },
    {
      "id": "Q181",
      "marks": 4,
      "text": "What does **tokenization** mean in the context of LLMs?",
      "options": [
        "A) Converting words into images",
        "B) Breaking down text into smaller units (tokens)",
        "C) Encrypting the prompt",
        "D) Translating text"
      ],
      "correct": "B"
    },
    {
      "id": "Q182",
      "marks": 4,
      "text": "What is the hexadecimal equivalent of the decimal number 255?",
      "options": [
        "A) FF",
        "B) 100",
        "C) FA",
        "D) 255"
      ],
      "correct": "A"
    },
    {
      "id": "Q183",
      "marks": 4,
      "text": "Which type of tree is an extension of the Binary Search Tree optimized for disk-based storage?",
      "options": [
        "A) AVL Tree",
        "B) B-Tree",
        "C) Red-Black Tree",
        "D) Heap"
      ],
      "correct": "B"
    },
    {
      "id": "Q184",
      "marks": 4,
      "text": "The main benefit of using a **Virtual Machine (VM)** is:",
      "options": [
        "A) Reduced network latency",
        "B) Running multiple operating systems concurrently on a single physical host",
        "C) Faster disk access",
        "D) Automatic backups"
      ],
      "correct": "B"
    },
    {
      "id": "Q185",
      "marks": 4,
      "text": "What is a **private subnet** in AWS VPC?",
      "options": [
        "A) A subnet connected directly to the Internet Gateway",
        "B) A subnet whose traffic is routed through a NAT Gateway or VPC Endpoint (no direct internet access)",
        "C) A subnet for public-facing servers",
        "D) A subnet reserved for AWS internal use"
      ],
      "correct": "B"
    },
    {
      "id": "Q186",
      "marks": 4,
      "text": "Which metric is generally preferred over Accuracy when dealing with imbalanced classification datasets?",
      "options": [
        "A) Mean Absolute Error (MAE)",
        "B) F1-Score (or AUC-ROC)",
        "C) R-squared",
        "D) Logarithmic Loss"
      ],
      "correct": "B"
    },
    {
      "id": "Q187",
      "marks": 4,
      "text": "In Python OOP, what does the keyword **super()** refer to?",
      "options": [
        "A) The current instance of the class",
        "B) A global variable",
        "C) The parent (superclass) of the class",
        "D) The main function"
      ],
      "correct": "C"
    },
    {
      "id": "Q188",
      "marks": 4,
      "text": "Which data structure is typically used to find connected components in a graph efficiently?",
      "options": [
        "A) Stack (DFS)",
        "B) Queue (BFS)",
        "C) Disjoint Set Union (DSU)",
        "D) AVL Tree"
      ],
      "correct": "C"
    },
    {
      "id": "Q189",
      "marks": 4,
      "text": "What is the function of the **HAVING** clause in SQL?",
      "options": [
        "A) Filters individual rows (like WHERE)",
        "B) Filters groups of rows (after GROUP BY)",
        "C) Joins two tables",
        "D) Orders the output"
      ],
      "correct": "B"
    },
    {
      "id": "Q190",
      "marks": 4,
      "text": "What is the result of the bitwise operation $10 >> 1$ (10 right shift 1)?",
      "options": [
        "A) 20",
        "B) 10",
        "C) 5",
        "D) 0"
      ],
      "correct": "C"
    },
    {
      "id": "Q191",
      "marks": 4,
      "text": "The memory where the operating system and currently running programs reside is:",
      "options": [
        "A) Hard Disk",
        "B) Cache",
        "C) RAM (Primary Memory)",
        "D) Flash Drive"
      ],
      "correct": "C"
    },
    {
      "id": "Q192",
      "marks": 4,
      "text": "What is the primary method used by web browsers to store small pieces of data on a user's computer?",
      "options": [
        "A) Local Storage",
        "B) Session Storage",
        "C) Cookies",
        "D) Web SQL"
      ],
      "correct": "C"
    },
    {
      "id": "Q193",
      "marks": 4,
      "text": "What is the concept of **Load Factor** in a Hash Table?",
      "options": [
        "A) The number of collisions",
        "B) The ratio of the number of items to the number of available buckets",
        "C) The size of the array",
        "D) The time taken for insertion"
      ],
      "correct": "B"
    },
    {
      "id": "Q194",
      "marks": 4,
      "text": "Which process is typically automated during the **Continuous Integration (CI)** stage of a pipeline?",
      "options": [
        "A) Manual deployment to production",
        "B) Code compiling, testing, and merging into a shared repository",
        "C) Customer feedback collection",
        "D) Infrastructure provisioning"
      ],
      "correct": "B"
    },
    {
      "id": "Q195",
      "marks": 4,
      "text": "Which ML algorithm is known for being resistant to outliers because it uses the median instead of the mean?",
      "options": [
        "A) Linear Regression",
        "B) Support Vector Machine (SVM)",
        "C) Decision Tree (or Random Forest)",
        "D) K-Means Clustering"
      ],
      "correct": "C"
    },
    {
      "id": "Q196",
      "marks": 4,
      "text": "What is the purpose of **Normalization** in a relational database?",
      "options": [
        "A) Speed up queries",
        "B) Organize columns and tables to minimize data redundancy",
        "C) Encrypt data",
        "D) Backup data"
      ],
      "correct": "B"
    },
    {
      "id": "Q197",
      "marks": 4,
      "text": "In networking, what is a **Subnet Mask** used for?",
      "options": [
        "A) Hiding the IP address",
        "B) Identifying the network part and the host part of an IP address",
        "C) Encrypting traffic",
        "D) Assigning IP addresses"
      ],
      "correct": "B"
    },
    {
      "id": "Q198",
      "marks": 4,
      "text": "What does the keyword **NONLOCAL** do in Python?",
      "options": [
        "A) Allows modification of a global variable",
        "B) Allows modification of a variable in the nearest enclosing scope (excluding the global scope)",
        "C) Defines a new local variable",
        "D) Imports a module"
      ],
      "correct": "B"
    },
    {
      "id": "Q199",
      "marks": 4,
      "text": "Which property must be maintained in a **Max Heap**?",
      "options": [
        "A) All nodes must have two children",
        "B) The value of a node must be greater than or equal to its children",
        "C) The tree must be fully balanced",
        "D) The leaf nodes must be empty"
      ],
      "correct": "B"
    },
    {
      "id": "Q200",
      "marks": 4,
      "text": "The main idea behind **Dynamic Programming** is to:",
      "options": [
        "A) Solve a problem by dividing it into independent subproblems",
        "B) Use memoization or tabulation to store and reuse results of overlapping subproblems",
        "C) Always select the locally optimal choice",
        "D) Apply a hash function to reduce complexity"
      ],
      "correct": "B"
    }
  
  // You can paste more questions from questions.txt here,
  // just follow the same {id, marks, text, options, correct} format.
];

// ================== GLOBAL STATE ==================
let chosenQuestions = [];
let currentSetIndex = 0;
let userAnswers = {};
let currentUser = null;

let remainingSeconds = HACKATHON_DURATION_MIN * 60;
let timerId = null;
let warnings = 0;
let violationReasons = [];
let quizFinished = false;
let inExam = false;

let lastActivityTime = Date.now();
let activityTimerId = null;

let stream = null;
let audioMonitorId = null;
let brightnessCheckId = null;

// ================== HELPERS ==================
function $(id) {
  return document.getElementById(id);
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// ================== TIMER ==================
function updateTimerDisplay() {
  const t = formatTime(remainingSeconds);
  const timerLabel = $("timer");
  const overlayTime = $("overlayTime");
  if (timerLabel) timerLabel.textContent = "Time Left: " + t;
  if (overlayTime) overlayTime.textContent = "Time Left: " + t;
}

function startTimer() {
  remainingSeconds = HACKATHON_DURATION_MIN * 60;
  updateTimerDisplay();
  if (timerId) clearInterval(timerId);

  timerId = setInterval(() => {
    remainingSeconds--;
    updateTimerDisplay();
    if (remainingSeconds <= 0) {
      clearInterval(timerId);
      autoSubmit("time");
    }
  }, 1000);
}

// ================== CAMERA + MIC ==================
async function startCameraAndMic() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    const video = $("cameraFeed");
    if (video) {
      video.srcObject = stream;
    }
    const proctorPanel = $("proctorPanel");
    if (proctorPanel) proctorPanel.classList.remove("hidden");

    startAudioMonitor(stream);
    startBrightnessMonitor(video);
  } catch (e) {
    issueWarning("Camera/Mic permission denied or blocked.");
  }
}

function stopCameraAndMic() {
  if (stream) {
    stream.getTracks().forEach(t => t.stop());
    stream = null;
  }
  if (audioMonitorId) clearInterval(audioMonitorId);
  if (brightnessCheckId) clearInterval(brightnessCheckId);
}

// ===== Audio monitoring: HIGH strict mode =====
function startAudioMonitor(mediaStream) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioCtx.createMediaStreamSource(mediaStream);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 512;
    source.connect(analyser);

    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    let loudStart = null;
    const LOUD_THRESHOLD = 80; // 0–255
    const REQUIRED_MS = 3000;  // 3 seconds

    audioMonitorId = setInterval(() => {
      if (!inExam || quizFinished) return;

      analyser.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((sum, v) => sum + v, 0) / dataArray.length;
      const now = Date.now();

      if (avg > LOUD_THRESHOLD) {
        if (loudStart === null) loudStart = now;
        if (now - loudStart >= REQUIRED_MS) {
          issueWarning("High continuous sound / speaking detected via mic.");
          loudStart = now; // avoid spamming
        }
      } else {
        loudStart = null;
      }
    }, 300);
  } catch (e) {
    // ignore audio monitor failure
  }
}

// ===== Camera brightness monitoring =====
function startBrightnessMonitor(videoEl) {
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    let lowBrightnessCount = 0;
    const BRIGHTNESS_THRESHOLD = 20;
    const REQUIRED_CHECKS = 5;

    brightnessCheckId = setInterval(() => {
      if (!inExam || quizFinished) return;
      if (!videoEl || !videoEl.videoWidth || !videoEl.videoHeight) return;

      canvas.width = 160;
      canvas.height = 120;
      ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      let sumBrightness = 0;
      const len = pixels.length / 4;
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        sumBrightness += (r + g + b) / 3;
      }
      const avgBrightness = sumBrightness / len;

      if (avgBrightness < BRIGHTNESS_THRESHOLD) {
        lowBrightnessCount++;
        if (lowBrightnessCount >= REQUIRED_CHECKS) {
          issueWarning("Camera image too dark/covered. Ensure your face is visible.");
          lowBrightnessCount = 0;
        }
      } else {
        lowBrightnessCount = 0;
      }
    }, 1500);
  } catch (e) {
    // ignore camera monitor failure
  }
}

// ================== ACTIVITY / VIOLATIONS ==================
function issueWarning(message) {
  if (!inExam || quizFinished) return;

  warnings++;
  if (!violationReasons.includes(message)) {
    violationReasons.push(message);
  }

  const overlayWarn = $("overlayWarnings");
  if (overlayWarn) overlayWarn.textContent = `Warnings: ${warnings} / ${MAX_WARNINGS}`;

  const banner = $("warningBanner");
  if (banner) {
    banner.textContent = "⚠ " + message;
    banner.classList.remove("hidden");
  }

  // beep
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 1000;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch {}

  if (warnings >= MAX_WARNINGS) {
    autoSubmit("violation");
  }
}

function setupActivityWatcher() {
  lastActivityTime = Date.now();
  const markActivity = () => {
    lastActivityTime = Date.now();
  };
  ["mousemove", "keydown", "click"].forEach(evt => {
    document.addEventListener(evt, markActivity, { passive: true });
  });

  if (activityTimerId) clearInterval(activityTimerId);
  activityTimerId = setInterval(() => {
    if (!inExam || quizFinished) return;
    const diff = Date.now() - lastActivityTime;
    if (diff > 90 * 1000) {
      issueWarning("No movement detected for 90 seconds.");
      lastActivityTime = Date.now();
    }
  }, 15000);
}

// Tab / window change
document.addEventListener("visibilitychange", () => {
  if (!inExam || quizFinished) return;
  if (document.hidden) {
    issueWarning("Tab switch or window minimized detected.");
  }
});

window.addEventListener("blur", () => {
  if (!inExam || quizFinished) return;
  issueWarning("Window focus lost (app switch / Alt+Tab).");
});

// Block copy/paste/right-click/select + shortcuts
function blockAndWarn(e, reason) {
  e.preventDefault();
  if (inExam && !quizFinished) {
    issueWarning(reason);
  }
}

document.addEventListener("copy", e => blockAndWarn(e, "Copy is not allowed during the test."));
document.addEventListener("cut", e => blockAndWarn(e, "Cut is not allowed during the test."));
document.addEventListener("paste", e => blockAndWarn(e, "Paste is not allowed during the test."));
document.addEventListener("contextmenu", e => blockAndWarn(e, "Right-click is disabled during the test."));
document.addEventListener("selectstart", e => blockAndWarn(e, "Text selection is disabled during the test."));

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (e.ctrlKey && !e.shiftKey && ["c", "x", "v", "s"].includes(key)) {
    blockAndWarn(e, "Keyboard shortcuts like Ctrl+C/X/V/S are not allowed.");
    return;
  }

  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key))) {
    blockAndWarn(e, "Developer tools / Inspect is not allowed.");
    return;
  }

  if (e.key === "PrintScreen") {
    blockAndWarn(e, "Screenshot / PrintScreen attempt detected.");
    return;
  }
});

// ================== QUESTION SELECTION ==================
function pickQuestionsForExam() {
  const threeMark = questionBank.filter(q => q.marks === 3);
  const fourMark = questionBank.filter(q => q.marks === 4);

  if (threeMark.length < 20 || fourMark.length < 10) {
    alert("Not enough questions in questionBank. Need at least 20 (3-mark) and 10 (4-mark) questions.");
    chosenQuestions = [];
    return;
  }

  shuffleArray(threeMark);
  shuffleArray(fourMark);

  const chosenThree = threeMark.slice(0, 20);
  const chosenFour = fourMark.slice(0, 10);

  chosenQuestions = chosenThree.concat(chosenFour);
}

// Render current set of 10
function renderCurrentSet() {
  const container = $("questionsContainer");
  if (!container) return;
  container.innerHTML = "";

  const startIdx = currentSetIndex * 10;
  const endIdx = startIdx + 10;
  const questions = chosenQuestions.slice(startIdx, endIdx);

  const setInfo = $("setInfo");
  if (setInfo) setInfo.textContent = `Set ${currentSetIndex + 1} of 3`;

  questions.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const header = document.createElement("div");
    header.className = "question-header";
    header.textContent = `Q${startIdx + idx + 1} (${q.marks} marks)`;
    card.appendChild(header);

    const textDiv = document.createElement("div");
    textDiv.className = "question-text";
    textDiv.textContent = q.text;
    card.appendChild(textDiv);

    q.options.forEach(opt => {
      const val = opt.trim().charAt(0); // 'A','B',...
      const optDiv = document.createElement("div");
      optDiv.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = q.id;
      input.value = val;

      if (userAnswers[q.id] === val) {
        input.checked = true;
      }

      input.addEventListener("change", () => {
        userAnswers[q.id] = val;
      });

      const label = document.createElement("label");
      label.textContent = opt;

      optDiv.appendChild(input);
      optDiv.appendChild(label);
      card.appendChild(optDiv);
    });

    container.appendChild(card);
  });

  const nextSetBtn = $("nextSetBtn");
  const submitBtn = $("submitBtn");

  if (currentSetIndex < 2) {
    if (nextSetBtn) nextSetBtn.classList.remove("hidden");
    if (submitBtn) submitBtn.classList.add("hidden");
  } else {
    if (nextSetBtn) nextSetBtn.classList.add("hidden");
    if (submitBtn) submitBtn.classList.remove("hidden");
  }
}

// ================== SCORING ==================
function computeResult() {
  let correctMarks = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  chosenQuestions.forEach(q => {
    const ans = userAnswers[q.id];
    if (!ans) {
      unansweredCount++;
    } else if (ans === q.correct) {
      correctMarks += q.marks;
    } else {
      wrongCount++;
    }
  });

  const penaltyWrong = wrongCount * 2; // -2 per wrong
  // No negative for unanswered as per final rule
  let finalScore = correctMarks - penaltyWrong;
  if (finalScore < 0) finalScore = 0;
  return finalScore;
}

function showResult(finalScore, autoSubmitted, reasonCode) {
  quizFinished = true;
  inExam = false;

  stopCameraAndMic();
  if (timerId) clearInterval(timerId);
  if (activityTimerId) clearInterval(activityTimerId);

  // Fill candidate info
  const resultCandidate = $("resultCandidate");
  const resultCandidateExtra = $("resultCandidateExtra");
  if (resultCandidate) {
    resultCandidate.textContent =
      `Name: ${currentUser.name}, Email-ID: ${currentUser.email}`;
  }
  if (resultCandidateExtra) {
    resultCandidateExtra.textContent =
      `College: ${currentUser.college} | Stream: ${currentUser.department}`;
  }

  const vBox = $("violationSummary");
  const badgeArea = $("badgeArea");
  const badgeLabel = $("badgeLabel");
  const scoreText = $("scoreText");
  const remarkText = $("remarkText");

  if (vBox) {
    vBox.classList.add("hidden");
    vBox.innerHTML = "";
  }
  if (badgeArea) badgeArea.classList.add("hidden");

  if (autoSubmitted && reasonCode === "violation") {
    // Violation → no badge
    if (vBox) {
      const list = violationReasons.length
        ? "<ul><li>" + violationReasons.join("</li><li>") + "</li></ul>"
        : "";
      vBox.innerHTML =
        `<strong>Your session was auto-submitted due to security violations (camera/mic/noise/tab switching or restricted actions).</strong><br><br>` +
        `<strong>Detected reasons:</strong>${list}<br><br>` +
        `If you are serious, you can request 1 re-attempt:<br>` +
        `1️⃣ Take a screenshot of this page<br>` +
        `2️⃣ Email the support team with justification<br><br>` +
        `Note: Another violation may block your access for up to 3 months.`;
      vBox.classList.remove("hidden");
    }
  } else {
    // Normal completion → show badge + label
    if (badgeArea && badgeLabel) {
      if (finalScore >= 90) {
        badgeLabel.textContent = "Champion Badge — Score ≥ 90";
      } else if (finalScore >= 70) {
        badgeLabel.textContent = "Winner Badge — Score 70–89";
      } else {
        badgeLabel.textContent = "Participation Badge — Score < 70";
      }
      badgeArea.classList.remove("hidden");
    }
  }

  if (scoreText) {
    scoreText.textContent = `Your Score: ${finalScore} / 100`;
  }

  let remark = "";
  if (autoSubmitted && reasonCode === "violation") {
    remark = "Your session was auto-submitted due to security violations. Please contact support for one more chance if justified.";
  } else if (finalScore >= 90) {
    remark = "Congratulations! You are now Eligible for 2nd round interview for Paid Internship.";
  } else if (finalScore >= 70) {
    remark = "Congratulations! You are now Eligible to choose 2nd round interview for Paid Internship, or you can skip and choose Unpaid Internship.";
  } else {
    remark = "Congratulations! You are now Eligible to choose Unpaid Internship.";
  }
  if (remarkText) remarkText.textContent = remark;

  // Switch to result view
  showSection("resultSection");
}

// ================== FINISH / AUTO SUBMIT ==================
function finishQuiz(reasonCode) {
  const finalScore = computeResult();
  const autoSubmitted = (reasonCode === "violation" || reasonCode === "time");
  showResult(finalScore, autoSubmitted, reasonCode);
}

function autoSubmit(reasonCode) {
  if (quizFinished) return;
  quizFinished = true;
  finishQuiz(reasonCode);
}

// ================== SECTION SWITCH ==================
function showSection(sectionId) {
  ["loginSection", "examSection", "resultSection"].forEach(id => {
    const sec = $(id);
    if (sec) sec.classList.add("hidden");
  });
  const target = $(sectionId);
  if (target) target.classList.remove("hidden");
}

// ================== EXAM START ==================
function startExam() {
  inExam = true;
  quizFinished = false;
  warnings = 0;
  violationReasons = [];

  const overlayWarn = $("overlayWarnings");
  if (overlayWarn) overlayWarn.textContent = `Warnings: 0 / ${MAX_WARNINGS}`;
  const banner = $("warningBanner");
  if (banner) banner.classList.add("hidden");

  const examNameLine = $("examNameLine");
  const examStatusLine = $("examStatusLine");
  const userInfoDisplay = $("userInfoDisplay");
  const overlayCandidate = $("overlayCandidate");

  if (examNameLine) {
    examNameLine.textContent =
      `Name: ${currentUser.name}, Email-ID: ${currentUser.email}`;
  }
  if (examStatusLine) {
    examStatusLine.textContent =
      `Time used: 00:00 | Warnings: 0 / ${MAX_WARNINGS} | Attempted 0 Questions`;
  }
  if (userInfoDisplay) {
    userInfoDisplay.textContent =
      `${currentUser.name} | ${currentUser.email}`;
  }
  if (overlayCandidate) {
    overlayCandidate.textContent = `Candidate: ${currentUser.name}`;
  }

  userAnswers = {};
  currentSetIndex = 0;

  pickQuestionsForExam();
  if (chosenQuestions.length !== 30) {
    alert("Error: Could not pick 30 questions. Check questionBank marks distribution.");
    return;
  }

  startTimer();
  startCameraAndMic();
  setupActivityWatcher();
  renderCurrentSet();

  // Disable back/forward navigation inside session
  history.pushState(null, "", location.href);
  window.addEventListener("popstate", () => {
    history.pushState(null, "", location.href);
  });

  showSection("examSection");
}

// ================== DOM READY ==================
document.addEventListener("DOMContentLoaded", () => {
  const userForm = $("userForm");
  const startBtn = $("startBtn");
  const lockMsg = $("lockMessage");

  // Block mobile / tablet
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  if (isMobile) {
    if (lockMsg) {
      lockMsg.textContent =
        "This Hackathon must be attended from a Laptop / PC. Mobile / Tablet devices are not allowed.";
      lockMsg.classList.remove("hidden");
    }
    if (startBtn) startBtn.disabled = true;
  }

  // Always start at login page
  showSection("loginSection");

  // Start Hackathon
  if (userForm) {
    userForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (isMobile) return;

      const name = $("name").value.trim();
      const email = $("email").value.trim();
      const college = $("college").value.trim();
      const department = $("department").value.trim();

      if (!name || !email || !college || !department) {
        alert("Please fill all fields before starting the Hackathon.");
        return;
      }

      currentUser = { name, email, college, department };

      startExam();
    });
  }

  // Next Set
  const nextSetBtn = $("nextSetBtn");
  if (nextSetBtn) {
    nextSetBtn.addEventListener("click", () => {
      if (currentSetIndex < 2) {
        currentSetIndex++;
        renderCurrentSet();
      }
    });
  }

  // Submit
  const submitBtn = $("submitBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to submit your Hackathon answers?")) {
        autoSubmit("normal");
      }
    });
  }

  // If you kept an Admin Reset panel in HTML, you can either remove its button
  // or let it do nothing. Currently we do nothing (lock removed completely).
  const adminResetBtn = $("adminResetBtn");
  if (adminResetBtn) {
    adminResetBtn.addEventListener("click", () => {
      alert("Admin Reset lock feature is disabled in this version.");
    });
  }
});
