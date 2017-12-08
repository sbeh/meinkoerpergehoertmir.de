<?php
$verzeichnis = './img/eure_bilder';
 
// Test, ob es sich um ein Verzeichnis handelt
if ( is_dir ( $verzeichnis ))
{
    // öffnen des Verzeichnisses
    if ( $handle = opendir($verzeichnis) )
    {
        // einlesen der Verzeichnisses
        while (($file = readdir($handle)) !== false)
        {
			if ( ($rest = substr($file, -4)) === '.jpg' ){
				$filerarray[]=$file;
			}
        }
        closedir($handle);
    }
}

?>
<section class="section">
	<div class="section__innen img__container">
	<?php
	for($i=0; $i< count($filerarray);$i++)
	{
	?>
		<div class="img__container--details5">
			<div class="details__content innen__img--galerie" style="background-image:url('./img/eure_bilder/<?php echo $filerarray[$i];?>')"></div>
		</div>
	<?php }?>
	</div>
</section>