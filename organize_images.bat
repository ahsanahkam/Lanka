@echo off
echo Organizing images into new directory structure...

REM Create main trail images
copy "public\assets\images\sigiriya.jpg" "public\assets\images\trails\sigiriya\main.jpg"
copy "public\assets\images\mirissa.jpg" "public\assets\images\trails\mirissa\main.jpg"
copy "public\assets\images\adams-peak.jpg" "public\assets\images\trails\adams-peak\main.jpg"
copy "public\assets\images\yala.jpg" "public\assets\images\trails\yala\main.jpg"
copy "public\assets\images\kandy-temple.jpg" "public\assets\images\trails\kandy-temple\main.jpg"
copy "public\assets\images\ella-rock.jpg" "public\assets\images\trails\ella-rock\main.jpg"

REM Create gallery images for trails (duplicating main image for now)
copy "public\assets\images\trails\sigiriya\main.jpg" "public\assets\images\trails\sigiriya\gallery-1.jpg"
copy "public\assets\images\trails\sigiriya\main.jpg" "public\assets\images\trails\sigiriya\gallery-2.jpg"
copy "public\assets\images\trails\sigiriya\main.jpg" "public\assets\images\trails\sigiriya\gallery-3.jpg"

copy "public\assets\images\trails\mirissa\main.jpg" "public\assets\images\trails\mirissa\gallery-1.jpg"
copy "public\assets\images\trails\mirissa\main.jpg" "public\assets\images\trails\mirissa\gallery-2.jpg"
copy "public\assets\images\trails\mirissa\main.jpg" "public\assets\images\trails\mirissa\gallery-3.jpg"

copy "public\assets\images\trails\adams-peak\main.jpg" "public\assets\images\trails\adams-peak\gallery-1.jpg"
copy "public\assets\images\trails\adams-peak\main.jpg" "public\assets\images\trails\adams-peak\gallery-2.jpg"
copy "public\assets\images\trails\adams-peak\main.jpg" "public\assets\images\trails\adams-peak\gallery-3.jpg"

copy "public\assets\images\trails\yala\main.jpg" "public\assets\images\trails\yala\gallery-1.jpg"
copy "public\assets\images\trails\yala\main.jpg" "public\assets\images\trails\yala\gallery-2.jpg"
copy "public\assets\images\trails\yala\main.jpg" "public\assets\images\trails\yala\gallery-3.jpg"

copy "public\assets\images\trails\kandy-temple\main.jpg" "public\assets\images\trails\kandy-temple\gallery-1.jpg"
copy "public\assets\images\trails\kandy-temple\main.jpg" "public\assets\images\trails\kandy-temple\gallery-2.jpg"
copy "public\assets\images\trails\kandy-temple\main.jpg" "public\assets\images\trails\kandy-temple\gallery-3.jpg"

copy "public\assets\images\trails\ella-rock\main.jpg" "public\assets\images\trails\ella-rock\gallery-1.jpg"
copy "public\assets\images\trails\ella-rock\main.jpg" "public\assets\images\trails\ella-rock\gallery-2.jpg"
copy "public\assets\images\trails\ella-rock\main.jpg" "public\assets\images\trails\ella-rock\gallery-3.jpg"

REM Create main story images
copy "public\assets\images\story1.jpg" "public\assets\images\stories\sigiriya-journey\main.jpg"
copy "public\assets\images\story2.jpg" "public\assets\images\stories\mirissa-whales\main.jpg"
copy "public\assets\images\story3.jpg" "public\assets\images\stories\adams-peak-sunrise\main.jpg"

REM Create gallery images for stories
copy "public\assets\images\stories\sigiriya-journey\main.jpg" "public\assets\images\stories\sigiriya-journey\gallery-1.jpg"
copy "public\assets\images\stories\sigiriya-journey\main.jpg" "public\assets\images\stories\sigiriya-journey\gallery-2.jpg"
copy "public\assets\images\stories\sigiriya-journey\main.jpg" "public\assets\images\stories\sigiriya-journey\gallery-3.jpg"

copy "public\assets\images\stories\mirissa-whales\main.jpg" "public\assets\images\stories\mirissa-whales\gallery-1.jpg"
copy "public\assets\images\stories\mirissa-whales\main.jpg" "public\assets\images\stories\mirissa-whales\gallery-2.jpg"
copy "public\assets\images\stories\mirissa-whales\main.jpg" "public\assets\images\stories\mirissa-whales\gallery-3.jpg"

copy "public\assets\images\stories\adams-peak-sunrise\main.jpg" "public\assets\images\stories\adams-peak-sunrise\gallery-1.jpg"
copy "public\assets\images\stories\adams-peak-sunrise\main.jpg" "public\assets\images\stories\adams-peak-sunrise\gallery-2.jpg"
copy "public\assets\images\stories\adams-peak-sunrise\main.jpg" "public\assets\images\stories\adams-peak-sunrise\gallery-3.jpg"

REM Move hero background to common
copy "public\assets\images\hero-background.jpg" "public\assets\images\common\hero-background.jpg"

echo Image organization complete!
pause
