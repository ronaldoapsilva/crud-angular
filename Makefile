create_project:
 	ng new crud-angular --standalone false --routing true

run:
	ng serve

# https://material.angular.io/guide/getting-started
install_material:
	ng add @angular/material


# https://v17.angular.io/cli/generate#component-command
create_module:
  ng g m courses --routing

create_component:
  ng g c courses/courses

g_interface:
  ng g interface courses/model/course
g_s:
  ng g s courses/services/courses
