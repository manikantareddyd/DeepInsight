# DeepInsight

* **Platform Targeted**: 	Microsoft Office, Universal Windows Platform
* **Tool Used**: 	JavaScript, Office APIs, Bing Web Search APIs, JSON, Python, Azure Web App service, LUIS, Cognitive Services APIs.
* **Demo**: [DeepInsight (Alpha 1)](https://www.youtube.com/watch?v=12Rd-j61wfg)

### Introduction
DeepInsight will provide relevant contents available over the web to the user within office document window for ease of reference, analysis, and citation. Our tool “DeepInsight” has 4 major components as shown in the figure - 1.

![DeepInsight](http://i.imgur.com/29OO1tE.png?1)

**Figure-1**: DeepInsight has 4 major components. 1) Content Reader uses Office APIs to read office documents. 2) Topic Identifier uses machine learning libraries and trained models to identify the topic. 3) Insight Collector uses bing web search apis to fetch relevant content from the world wide web. 4) User Interface displays the various options to the users to enhance the documents in real time.

*	**Content Reader**: Read the content of the office document with the help of Office APIs
*	**Topic Identifier**: It identifies the domain or topic from the content with the help of backend server executing machine learning model trained on the corpus. The accuracy of our tool depends on this component. DeepInsight uses REST APIs for the communication with the backend server.
*	**Insight Collector**: Once topic is identified, DeepInsight fetches the relevant content available over the web with the help of Bing Search APIs. Fetched content is then sorted based on the different parameters such as relevance, date etc.
*	**User Interface**: GUI component of the DeepInsight tool displays the content in the same window as office document in a pop-up sidebar. It also allows user to -
 *	Check out the preview of the relevant content
 *	Insert the reference or citation in the document
 *	Insert the hyperlink of the content in the document

###Sample
Below is a sample of how our app would look in office.



![Preview](http://i.imgur.com/FXzUodK.png)

**Figure – 2**: shows the DeepInsight in working.  The leftmost side bar pop up displays the relevant web links. Hovering the mouse over these links shows the various options to display such as Preview, Reference and Insert Link. The figure also shows the output of Preview function in 2nd left sidebar. Similarly insert link option will simply insert the hyperlink in the document and reference option add the citation number with reference at the bottom of the document.


###Key features of our design approach:
DeepInsight empowers office users by providing relevant content from the web in real time. A user can use it to improve the content of the document. A novice user can also use this tool to get word suggestions to increase the language proficiency of the document.

*	Modularity: Using REST APIs for communication among different component with JSON objects brings the modularity in our design and make the components independent of each other.
 *	We can easily replace the backend with more complex, advanced and domain-specific models to further improve the accuracy in Topic Identifier component without modifying the Insight Collector or any other component.
 *	The REST architecture allows us to consume the same api and target multiple platforms. We are currently aiming at building an Office plugin as well as a UWP app. If time permits we will also build a chat bot using the newly announced bot framework.
*	Multimedia Content Support: User Interface module also allows the user to insert hypermedia content such as images, graphs, charts, audios, videos etc. into the office document.  
*	User Friendliness: The User Interface component will be simple to use and intuitive. The user can enable or disable DeepInsight easily. The user has no need to switch among multiple windows as relevant content from their favourite search engines are available to them in a ready to use manner.  It increases user’s efficiency to enhance the document and save the user’s time.
*	Real-time Insight: DeepInsight tool runs in background and as user updates the office document, it periodically updates its result and display to the user. User can also switch off the real-time mode easily.


###Preview
Here is a preview
[DeepInsight (Alpha 1)](https://www.youtube.com/watch?v=12Rd-j61wfg)
