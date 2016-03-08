/**
 * This enum has all the Twitter Bootstrap styles for the app.
 */

var Styles = {
  PRIMARY : "primary",
  INFO : "info",
  WARNING : "warning",
  DANGER : "danger",
  DEFAULT : "default",
  LINK : "link",
  SUCCESS : "success"
}
// Adds all styles in an array for simple iteration
Styles.values = [ Styles.DANGER, Styles.DEFAULT, Styles.INFO, Styles.LINK, Styles.PRIMARY,
    Styles.SUCCESS, Styles.WARNING ];
// Adds all styles usable by panels.
Styles.panelValues = [ Styles.DANGER, Styles.DEFAULT, Styles.INFO, Styles.PRIMARY, Styles.SUCCESS,
    Styles.WARNING ];

// Freezes the object if possible.
if (Object.freeze) {
  Object.freeze(Styles);
}