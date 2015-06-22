<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>

<!-- Import libs -->
<script type="text/javascript" src="/libs/class.js"></script>

<!-- Import all widgets -->
<!-- Widget.js must be first, because widgetsName dependencies -->
<script type="text/javascript" src="/scripts/utils/IdGenerator.js"></script>
<script type="text/javascript" src="/scripts/utils/Types.js"></script>
<script type="text/javascript" src="/scripts/utils/Styles.js"></script>
<script type="text/javascript" src="/scripts/widgets/Widget.js"></script>
<script type="text/javascript" src="/scripts/widgets/Label.js"></script>
<script type="text/javascript" src="/scripts/widgets/Title.js"></script>
<script type="text/javascript" src="/scripts/widgets/Button.js"></script>
<script type="text/javascript" src="/scripts/widgets/Input.js"></script>
<script type="text/javascript" src="/scripts/widgets/Panel.js"></script>
<script type="text/javascript" src="/scripts/utils/FormConstructor.js"></script>
<script type="text/javascript" src="/scripts/utils/ModalConstructor.js"></script>
<script type="text/javascript" src="/scripts/utils/PersistenceManager.js"></script>
<script type="text/javascript" src="/scripts/ajax/GenericRESTClient.js"></script>
<script type="text/javascript" src="/scripts/ajax/MockupRESTClient.js"></script>

<!-- Import MK for mock widgets -->
<link href="/css/mock-elements.css" type="text/css" rel="stylesheet">