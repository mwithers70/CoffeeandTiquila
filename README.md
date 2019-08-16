<h1>Coffee & Tiquila User Story/ User Flow</h1>
<b>In person: Teammates decide on team name. For our purposes this is going to be hard-coded and the team name will be COFEPPL .</b> 

User registers with username and password.

User logs in with valid username, password, and teamName COFEPPL .

	
If any field is invalid, do not redirect. Instead if
-   teamName is invalid/null  
“Invalid team name. Please contact your team for the correct name.”

-	Username or password is invalid  
“Invalid credentials. Please try again.”   
	And allow user to re-try entry until correct.
	
	
If all fields are valid and not null, perform function whereToRedirect()
-	IF orderIsActive redirect to Menu page.
-	IF !orderIsActive redirect to BeginOrder page.**


On all pages once logged in, at the top & under the nav bar, show either “Order is currently open for another x minutes, y seconds.” Counting down OR “No order is open. Click here to begin an order” and it will be a link to the Begin Order page; in the latter case, ADD TO ORDER button is hidden.


Nav Bar fragment will show:  
   
   ```
    “Coffee & Tiquila”   <link “Menu”>     <link”username” of current user, linking to User page>   <”OrderSummary” link to page> <link "Log Out"> 
```
**Once redirected to BeginOrder page, User will see Google API map widget showing nearby coffee shops and that widget will allow that user to see selected coffee shop info (name, location, website, phone).   

Once selected, User can click BeginOrder button and the countdown will start sitewide (persist) AND the order will be OPEN (persist).  

•	IF currentUser==Runner (ie, was the person to begin the order) THAT user will see a button on OrderSummary page to “Add 5 mins” to countdown. OnClick, the countdown sitewide will add 5 minutes to extend the window for orders to be added.  

o	This is assuming that in person, outside of our need to program the app, any user has verbally asked the runner for more time. (UX)  

•	IF currentUser !=Runner (think of Roles from Twitter project) then the “Add 5 mins” button will be hidden. This can be done using the th:if=”” property in the div tags on the OrderSummary.html page.  

•	On the OrderSummary page, all users should be able to see a card/list (whichever UI/UX team chooses to use) of everyone’s orders. If Taylor==Runner and chosenPlace==Starbucks it should look something like:  


Taylor is running to Starbucks 
```html
<div th:if=”basically Tiquila did add a drink to the order”>
(hardcoded name)Tiquila: <img> <drinkName> <drinkSize> <drinkDetails> <drinkPrice>
</div>
<div th:if=”basically Torie did add a drink to the order”>
(hardcoded name)Torie: <img> <drinkName> <drinkSize> <drinkDetails> <drinkPrice>
</div>
Example: Torie: [img] White Chocolate Mocha   Grande   no-whip       $5
```
Where drinkDetails and drinkSize may be null. This is because NotJustCoffee doesn’t have different drink sizes and the user might not have extra details for that drink. 
-  Should drink details be hard-coded into h2 database and saved that way or should the user be able to edit that in a text box?
-  As for the image I’d say a generic image is fine unless UI/UX wants to do extra work to add those to the database. 
-  For questions on using the sql statements via localhost:xxxx/console please ask!
  
  Note: make sure <b>application.properties</b> includes the following: 
```
# configure data source
# the db will be stored in a file that persist across app restarts
spring.h2.console.enabled = true
spring.h2.console.path = /console
spring.datasource.url = jdbc:h2:file:~/coffeeandtiquila
spring.datasource.username = sa
spring.datasource.password =
spring.datasource.driver-class-name = org.h2.Driver
# show sql queries in console
spring.jpa.show-sql = true
# update ddl when app starts
spring.jpa.hibernate.ddl-auto = update
```

Notes on using github from terminal:

<b>git status</b>				
this checks your local repo against the remote origin repo. WHEN IN DOUBT USE GIT STATUS 

<b>git add .</b>				
this adds all changes you’ve made in your local files

<b>git commit -m “your message here”</b>	 
this commits those staged (added) changes to the remote repo  

<b>git push origin master</b>  
this pushes to the remote repo, over-writing the old code. Only do this upon discussion and agreement with group. It is advised you only commit and push to your own remote branch to avoid code conflicts. For any other help, just ask!

