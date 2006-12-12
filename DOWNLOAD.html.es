<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<head>
  <title>Descarga e Instalaci&oacute;n del Validador de CSS</title>
  <link rev="made" href="mailto:www-validator-css@w3.org" />
  <link rev="start" href="./" title="Home Page" />
  <style type="text/css" media="all">
    @import "style/base.css";  
  	@import "style/docs.css";
  </style>
  <meta name="revision"
  content="$Id$" />
  <!-- SSI Template Version: $Id$ -->

</head>

<body>

  <div id="banner">
    <h1 id="title"><a href="http://www.w3.org/"><img height="48" alt="W3C" id="logo" src="http://www.w3.org/Icons/WWW/w3c_home_nb" /></a>
    <a href="./"><img src="images/css_validation_service.png" alt="Servicio de Validaci&oacute;n de CSS" /></a></h1>
   </div>


<h2>Descarga e instalaci&oacute;n del Validador de CSS</h2>
<h3 id="download">Descarga el Validador de CSS</h3>	

	<h4 id="source">Descarga la fuente</h4>
    <p>
      El <a href='http://dev.w3.org/cvsweb/2002/css-validator'>validador de CSS</a> est&aacute; disponible para descarga mediante CVS.
      Sigue las <a href='http://dev.w3.org/cvsweb/'>instrucciones</a> para acceder
      al servidor p&uacute;blico de CVS del W3C y consigue 2002/css-validator. Ten en cuenta  
      que la versi&oacute;n en l&iacute;nea del Validador de CSS es, generalmente, m&aacute;s antigua que la 
      versi&oacute;n CVS, de modo que los resultados y la apariencia pueden variar ligeramente...
    </p>	
	<h4>Descarga como un paquete java (jar o war)</h4>
	<p>A determinar... s&oacute;lo necesitamos una ubicaci&oacute;n estable para poner los archivos jar/war en una base regular</p>

<h3>Gu&iacute;a de instalaci&oacute;n</h3>
<p>El servicio de validaci&oacute;n de CSS es un software servlet, escrito en Java. Puede instalarse en cualquier motor servlet,
y tambi&eacute;n se puede utilizar como una sencilla herramienta de l&iacute;nea de comando.
El servicio oficial  de Validaci&oacute;n CSS del W3C funciona con el servidor Jigwaw, que es la configuraci&oacute;n recomendada.
Sin embargo, en aras de la simplicidad, en este documento proporcionaremos principalmente detalles sobre c&oacute;mo instalarlo como un servlet en l&iacute;nea con Tomcat, el motor servlet de Apache.
</p>

<p>Tambi&eacute;n se ofrecen, a continuaci&oacute;n, las instrucciones para la instalaci&oacute;n del servlet con Jigsaw, as&iacute; como para la ejecuci&oacute;n en un entorno de l&iacute;nea de comando.</p>

<h4 id="prereq">Prerrequisitos</h4>

<p>Esta gu&iacute;a de instalaci&oacute;n asume que has descargado, instalado y probado: </p>
<ul class="instructions">
	<li>Un entorno java que funciona,</li>
	<li>La herramienta de desarrollo java <a href="http://ant.apache.org/">Ant</a></li>
	<li>Un contenedor del servlet Web java, como 
		<a href="http://www.w3.org/Jigsaw/">Jigsaw</a>, <a href="http://tomcat.apache.org/">Tomcat</a> o
		<a href="http://www.mortbay.org/">Jetty</a> si planeas utilizar el validador como un servicio en l&iacute;nea. 
		Esta gu&iacute;a &uacute;nicamente cubre en detalle Tomcat y Jigsaw.</li>
</ul>
<p id="prereq-libs">Para la instalaci&oacute;n del validador en tu sistema, necesitar&aacute;s descargar y/o encontrar en tu sistema unas librer&iacute;as de java:</p>
<ul class="instructions">
	<li>servlet.jar
	(que, si tienes Tomcat instalado en [<span class="const">TOMCAT_DIR</span>],
	 deber&iacute;as encontrar en [<span class="const">TOMCAT_DIR</span>]/common/lib/, posiblemente bajo el nombre servlet-api.jar. Si no, cons&iacute;guelo en 
	<a href="http://java.sun.com/products/servlet/download.html">java.sun.com</a></li>
	<li><a href="http://jigsaw.w3.org/Devel/classes-2.2/20060329/">jigsaw.jar</a></li>
	<li>xercesImpl.jar y xml-apis.jar (que puedes descargar con
	<a href="http://www.apache.org/dist/xml/xerces-j/">xerces-j-bin</a>).</li>
</ul>

<h4>Instalaci&oacute;n del Validador CSS Validator con Tomcat</h4>
<ol class="instructions">
	<li>
		Descarga el validador seg&uacute;n lo explicado m&aacute;s <a href="#source">arriba</a>.
	</li>
	<li>Copia entera la carpeta de fuente  ("<span class="dir">.../css-validator/</span>") al directorio  <span class="dir">webapps</span>
		dentro de tu instalaci&oacute;n de Tomcat. Normalmente, este ser&aacute; 
		<span class="dir">[<span class="const">TOMCAT_DIR</span>]/webapps/</span>.
		Las fuentes del Validador est&aacute;n ahora en <span class="dir">[<span class="const">TOMCAT_DIR</span>]/webapps/css-validator</span>,
		a la que llamaraemos a partir de ahora <span class="dir">[<span class="const">VALIDATOR_DIR</span>]</span>.
	</li>
	<li>En "<span class="dir">[<span class="const">VALIDATOR_DIR</span>]</span>" crea un directorio "<span class="dir">WEB-INF</span>", y en "<span class="dir">[<span class="const">VALIDATOR_DIR</span>]/WEB-INF</span>" crea un directorio "<span class="dir">lib</span>":<br />
		<kbd>mkdir -p WEB-INF/lib</kbd>
		</li>
	<li>Copia todos los ficheros jar (desde los <a href="#prereq-libs">prerequisitos</a>) al directorio "<span class="dir">[<span class="const">VALIDATOR_DIR</span>]/WEB-INF/lib</span>"</li>
	<li>Compila la fuente del validador: del directorio <span class="dir">[<span class="const">VALIDATOR_DIR</span>]</span>,
		Ejecuta <kbd>ant</kbd>, mientras aseg&uacute;rate que los archivos jar que descargaste estan establecidos correctamente en tu variable de entorno CLASSPATH. 
		Con caracter general, lo siguiente funcionar&aacute;:<br />
		<kbd>CLASSPATH=.:./WEB-INF/lib:$CLASSPATH ant</kbd>
	</li>
	<li>Copia o mueve "<span class="dir">[<span class="const">VALIDATOR_DIR</span>]/</span><span class="file">css-validator.jar</span>"
	a "<span class="dir">[<span class="const">VALIDATOR_DIR</span>]/WEB-INF/lib/</span>".</li>
	<li>
		Copia o mueve file "<span class="file">web.xml</span>" de
		"<span class="dir">[<span class="const">VALIDATOR_DIR</span>]/</span>" a
		"<span class="dir">[<span class="const">VALIDATOR_DIR</span>]/WEB-INF/</span>".
	</li>
    <li>
		Para finalizar, recarga el servidor Tomcat:<br />
<kbd>"cd <span class="dir">[<span class="const">TOMCAT_DIR</span>]</span>; <span class="dir">./bin/</span><span class="file">shutdown.sh</span>; <span class="dir">./bin/</span><span class="file">startup.sh</span>;"</kbd>
	</li>
</ol>

<h4>Instalaci&oacute;n en el Servidor Web Jigsaw</h4>
<ol class="instructions">
<li>Primero, descarga la fuente, seg&uacute;n lo descrito arriba, consigue los jars necesarios, y desarrolla la fuente con <kbd>ant</kbd>.</li>

<li>Luego tienes que configurar el directorio de inicio del validador (normalmente este es css-validator) de forma que pueda funcionar como un contenedor del servlet. Para este prop&oacute;sito necesitas tener instalado Jigsaw (consulta las p&aacute;ginas de Jigsaw para una breve introducci&oacute;n (es realmente f&aacute;cil)) y a continuaci&oacute;n iniciar Jigsaw Admin. Cambia el HTTPFrame a ServletDirectoryFrame.</li>

<li>El siguiente paso es crear un recurso "validator", teniendo como class
'ServletWrapper' y como frame 'ServletWrapperFrame'. El &uacute;ltimo deber&iacute;a agregarse &eacute;l mismo autom&aacute;gicamente. La class del servlet es
org.w3c.css.servlet.CssValidator. Si ya existe un fichero llamado 'validator', por favor ren&oacute;mbralo. Es importante que este 'alias' se llame siempre 'validator'.</li>

<li>Para finalizar, arranca jigsaw y ejecuta el validador. Comprueba qu&eacute; HTML deseas invocar. Normalmente tu URL ser&aacute; similar a esta:<br />
http://localhost:8001/css-validator/validator.html</li>
</ol>

<h3>Utilizaci&oacute;n en l&iacute;nea de comandos</h3>

<p>El validador CSS puede utilizarse tambi&eacute;n como una herramienta de l&iacute;nea de comandos, si tu ordenador tiene instalado java. Compila css-validator.jar seg&uacute;n lo explicado arriba, y ejecuta:<br />
<kbd>java -jar css-validator.jar http://www.w3.org/</kbd>
</p>

   <ul class="navbar"  id="menu">
	<li><strong><a href="./" title="P&aacute;gina de inicio del Servicio de Validaci&oacute;n CSS del  W3C">Inicio</a></strong> <span class="hideme">|</span></li>
	<li><a href="about.html" title="Acerca de este servicio">Acerca de este servicio</a> <span class="hideme">|</span></li>

        <li><a href="documentation.html" title="Documentaci&oacute;n del Servicio de Validaci&oacute;n CSS del W3C">Documentaci&oacute;n</a> <span class="hideme">|</span></li>
        <li><a href="Email.html" title="C&oacute;mo realizar comentarios sobre este servicio">Comentarios</a> <span class="hideme">|</span></li>
        <li><a href="thanks.html" title="Cr&eacute;ditos y Agradecimientos">Cr&eacute;ditos</a><span class="hideme">|</span></li>

      </ul>

   <p id="activity_logos">
      <a href="http://www.w3.org/QA/" title="W3C's Quality Assurance Activity, bringing you free Web quality tools and more"><img src="http://www.w3.org/QA/2002/12/qa-small.png" alt="QA" /></a><a href="http://www.w3.org/Style/CSS/learning" title="Learn more about Cascading Style Sheets"><img src="images/woolly-icon" alt="CSS" /></a>
   </p>

   <p id="support_logo">
Support this tool, become a<br />
<a href="http://www.w3.org/Consortium/supporters"><img src="http://www.w3.org/Consortium/supporter-logos/csupporter.png" alt="W3C Supporter" /></a>
   </p>

    <p class="copyright">
      <a rel="Copyright" href="http://www.w3.org/Consortium/Legal/ipr-notice#Copyright">Copyright</a> &copy; 1994-2006
      <a href="http://www.w3.org/"><acronym title="World Wide Web Consortium">W3C</acronym></a>&reg;

      (<a href="http://www.csail.mit.edu/"><acronym title="Massachusetts Institute of Technology">MIT</acronym></a>,
      <a href="http://www.ercim.org/"><acronym title="European Research Consortium for Informatics and Mathematics">ERCIM</acronym></a>,
      <a href="http://www.keio.ac.jp/">Keio</a>),
      All Rights Reserved.
      W3C <a href="http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer">liability</a>,
      <a href="http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks">trademark</a>,
      <a rel="Copyright" href="http://www.w3.org/Consortium/Legal/copyright-documents">document use</a>

      and <a rel="Copyright" href="http://www.w3.org/Consortium/Legal/copyright-software">software licensing</a>

      rules apply. Your interactions with this site are in accordance
      with our <a href="http://www.w3.org/Consortium/Legal/privacy-statement#Public">public</a> and
      <a href="http://www.w3.org/Consortium/Legal/privacy-statement#Members">Member</a> privacy
      statements.
    </p>


  </body>

</html>



