<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <style>
      * {
        box-sizing: border-box;
      }
      
      /* Create two equal columns that floats next to each other */
      .column {
        float: left;
        width: 50%;
        padding: 10px;
        height: 300px; /* Should be removed. Only for demonstration */
      }
      
      /* Clear floats after the columns */
      .row:after {
        content: "";
        display: table;
        clear: both;
      }
      </style>
    <title>To Do List</title>
  </head>

  <body>
    <div class="row">
      <header class="siteheader">
        <div class="column">
          <h1 class="site-title">To Do List</h1>
          
          <pre class="tag" id="Name">     <u>Task</u>    <u>Complete:</u></pre>
          <ol id="Task List">
            
          </ol>
          <button type="button" id="Add">Add Task</button>
        </div>
      </header>
        <div class="column">
          <h1 class="site-title">Dashboard</h1>
          <div class="row">
            <label id="Total"> Total Tasks: 0</label>
            <label id="NComplete"> Complete Tasks: 0</label>
            <label id="NIncomplete"> Incomplete Tasks: 0</label>
          </div>
        </div>
    </div  

    
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javascript" src="./FWG.js"></script>
  </body>
</html>
