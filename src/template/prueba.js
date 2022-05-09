module.exports = {
    "formId" : "9943576984756980437",
    "name" : "formulario de pruebas",
    "formElements" : [
        {
            "displayName": "My Dynamic Form",
            "displayOrder": 0,
            "required": false,
            "elementId": "printElement",
            "type": "print",
            "readOnly": false,
        },
        {
            "displayName": "text",
            "displayOrder": 1,
            "required": false,
            "elementId": "formPrueba.campo1",
            "type": "text",
            "readOnly": false,
            "isHidden": false
        },
        {
            "displayName": "textarea",
            "displayOrder": 6,
            "required": false,
            "elementId": "salesPersonFirstName",
            "type": "textarea",
            "readOnly": false,
            "isHidden": false
        }, {
            "displayName": "password",
            "displayOrder": 7,
            "required": false,
            "elementId": "salesPersonLastName",
            "type": "password",
            "readOnly": false,
            "isHidden": false
        },
        {
            "displayName": "Radio",
            "displayOrder": 5,
            "required": false,
            "elementId": "mainPerson.gender",
            "formElementValues": [{
              "displayName": "Male",
              "displayOrder": 1,
              "elementvalueId": "male"
            }, {
              "displayName": "Female",
              "displayOrder": 2,
              "elementvalueId": "female"
            }],
            "type": "simple-select",
            "readOnly": false,
            "isHidden": ()=>(false)
          },{
            "displayName": "Status",
            "displayOrder": 9,
            "required": false,
            "elementId": "status",
            "formElementValues": [{
              "displayName": "Approved",
              "displayOrder": 1,
              "elementvalueId": "approved"
            }, {
              "displayName": "Declined",
              "displayOrder": 2,
              "elementvalueId": "declined"
            }, {
              "displayName": "Pending",
              "displayOrder": 3,
              "elementvalueId": "pending"
            }],
            "type": "radio",
            "readOnly": false,
            "isHidden": ()=>(false)
          },
          {
            "displayName": "Registered?",
            "displayOrder": 10,
            "required": false,
            "elementId": "registered",
            "type": "checkbox",
            "readOnly": false,
            "isHidden": false
          },
    ]
}