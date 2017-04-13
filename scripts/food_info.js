$(document).ready(function() {
	            $.ajax({
	                type: 'GET',
	                url: 'food_menu.xml',
	                dataType: 'xml',
	                success: function(xml) {
	                    $(xml).find('food').each(function() {

	                        $('#waffle').append(
	                            '<table>' +
	                            	'<td><img src="' + $(this).find('image').text() + '" style="width:200px; height:auto;"></td> ' +
	                                '<td valign="top"><b>Name: </b>' +
	                                    $(this).find('name').text() + "<br />" +
	                                '<b>Description: </b>' +
	                                    $(this).find('description').text() + "<br />" + 
	                                '<b>Price: </b>' +
	                                    $(this).find('price').text() + "<br />" +
	                                '<b>Calories: </b>' +
	                                    $(this).find('calories').text() + '</td> ' +
	                            '</table>');
	                    });
	                }
	            });
	        });