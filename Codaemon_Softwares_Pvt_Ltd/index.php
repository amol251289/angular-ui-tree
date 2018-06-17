<!DOCTYPE html>
<html>
   <head>
   		<meta charset="UTF-8"> 
   		<link rel="stylesheet" href="css/bootstrap.min.css">
         <link rel="stylesheet" href="css/style.css">
   		<style type="text/css">
   			.TAC
   			{
   				text-align: center;
   			}
            body
            {
               font-size: 15px;
               margin-top: 20px;
            }
   		</style>
   </head>
   <body ng-app="myapp" ng-controller="CodaemonController as codaemonCtrl">
      <div class="col-md-11 no-lr-padding " ng-if="!table_form"><!-- offset-md-1 -->
         <div class="card">
            <div class="card-header">
               <strong>List</strong>
               <div class="float-right mb-0">
                  <button class="btn btn-primary" ng-click="toggleForm()">Search</button>
               </div>
            </div>
            <div class="card-body">
               <div class="table-responsive"  >
                  <table class="table table-bordered">
            			<tr>
            				<th class="TAC" width="5%">#</th>
            				<th class="TAC" width="10%">Exam No.</th>
            				<th class="TAC" width="15%">First Name</th>
            				<th class="TAC" width="15%">Last Name</th>
            				<th class="TAC" width="20%">Agency Desc</th>
            				<th class="TAC" width="20%">Title Desc</th>
            				<th class="TAC" width="15%">Published Date</th>
            			</tr>
            			<tr ng-repeat="codaemonDet in codaemonDetails track by $index">
            				<td class="TAC">{{$index+1}}</td>
            				<td class="TAC">{{ codaemonDet.exam_no }}</td>
            				<td>{{ codaemonDet.first_name }}</td>
            				<td>{{ codaemonDet.last_name }}</td>
            				<td>{{ codaemonDet.list_agency_desc }}</td>
            				<td>{{ codaemonDet.list_title_desc }}</td>
            				<td class="TAC">{{ formatDate(codaemonDet.published_date) }}</td>
            			</tr>
                     <tr ng-if="codaemonDetails.length == 0">
                        <td colspan="7" class="TAC">No data available.</td>
                     </tr>
            		</table>
               </div>
            </div>
         </div>
      </div>
      <div class="col-md-11 no-lr-padding " ng-if="table_form"><!-- offset-md-1 -->
         <div class="card">
            <div class="card-header">
               <strong>Search</strong>
               <div class="float-right mb-0">
                  <button class="btn btn-primary" ng-click="toggleForm()">Back</button>
               </div>
            </div>
            <form name="BlogForm" ng-submit="searchDetails(formdata)" novalidate>
               <div class="card-body">
                  <div class="form-group ">
                     <label for="First-name">First Name</label>
                     <input type="text" name="first_name" class="form-control" ng-model="formdata.first_name" placeholder="First Name" >
                  </div>{{first_name}}
                  <div class="form-group">
                     <label for="First-name">Last Name</label>
                     <input type="text" name="last_name" class="form-control" ng-model="formdata.last_name" placeholder="Last Name" >
                  </div>
               </div>
               <div class="card-footer text-right">
                  <button type="submit" class="btn btn-success">
                     Search
                  </button>
                  <button type="button" class="btn btn-danger" ng-click="toggleForm()">Cancel</button>
               </div>
            </form>
         </div>
      </div>
      <div>
      		<script type="text/javascript" src="js/jquery.min.js"></script>
      		<script type="text/javascript" src="js/bootstrap.min.js"></script>
      		<script type="text/javascript" src="js/angular.min.js"></script>
            <script type="text/javascript" src="node_modules/moment/moment.min.js"></script>
      		<script type="text/javascript" src="js/app.js"></script>
      </div>
   </body>
</html>