@echo off
echo Creating round favicon from profile.jpg...

powershell -Command "$outputPath = 'favicon.png'; Add-Type -AssemblyName System.Drawing; $img = [System.Drawing.Image]::FromFile('..\images\profile.jpg'); $bmp = New-Object System.Drawing.Bitmap($img, 32, 32); $finalBmp = New-Object System.Drawing.Bitmap(32, 32); $g = [System.Drawing.Graphics]::FromImage($finalBmp); $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias; $p = New-Object System.Drawing.Drawing2D.GraphicsPath; $p.AddEllipse(0, 0, 32, 32); $g.SetClip($p); $g.DrawImage($img, 0, 0, 32, 32); $finalBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png); $g.Dispose(); $bmp.Dispose(); $finalBmp.Dispose(); $img.Dispose(); Write-Host 'Favicon created successfully: ' + $outputPath"

echo Favicon created at assets/favicons/favicon.png
echo Please refresh your browser to see the new favicon. 