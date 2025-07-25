# PowerShell script to organize images into new directory structure
Write-Host "Organizing images into new directory structure..." -ForegroundColor Green

$baseImagePath = "public\assets\images"

# Function to copy and create gallery images
function Copy-TrailImages {
    param($sourceName, $trailName)
    
    $sourceFile = "$baseImagePath\$sourceName.jpg"
    $destDir = "$baseImagePath\trails\$trailName"
    
    if (Test-Path $sourceFile) {
        # Copy main image
        Copy-Item $sourceFile "$destDir\main.jpg" -Force
        Write-Host "Copied $sourceName to $trailName/main.jpg" -ForegroundColor Yellow
        
        # Create gallery images (duplicates for now)
        Copy-Item "$destDir\main.jpg" "$destDir\gallery-1.jpg" -Force
        Copy-Item "$destDir\main.jpg" "$destDir\gallery-2.jpg" -Force
        Copy-Item "$destDir\main.jpg" "$destDir\gallery-3.jpg" -Force
        Write-Host "Created gallery images for $trailName" -ForegroundColor Yellow
    } else {
        Write-Host "Source file not found: $sourceFile" -ForegroundColor Red
    }
}

function Copy-StoryImages {
    param($sourceName, $storyName)
    
    $sourceFile = "$baseImagePath\$sourceName.jpg"
    $destDir = "$baseImagePath\stories\$storyName"
    
    if (Test-Path $sourceFile) {
        # Copy main image
        Copy-Item $sourceFile "$destDir\main.jpg" -Force
        Write-Host "Copied $sourceName to $storyName/main.jpg" -ForegroundColor Cyan
        
        # Create gallery images (duplicates for now)
        Copy-Item "$destDir\main.jpg" "$destDir\gallery-1.jpg" -Force
        Copy-Item "$destDir\main.jpg" "$destDir\gallery-2.jpg" -Force
        Copy-Item "$destDir\main.jpg" "$destDir\gallery-3.jpg" -Force
        Write-Host "Created gallery images for $storyName" -ForegroundColor Cyan
    } else {
        Write-Host "Source file not found: $sourceFile" -ForegroundColor Red
    }
}

# Copy trail images
Copy-TrailImages "sigiriya" "sigiriya"
Copy-TrailImages "mirissa" "mirissa"
Copy-TrailImages "adams-peak" "adams-peak"
Copy-TrailImages "yala" "yala"
Copy-TrailImages "kandy-temple" "kandy-temple"
Copy-TrailImages "ella-rock" "ella-rock"

# Copy story images
Copy-StoryImages "story1" "sigiriya-journey"
Copy-StoryImages "story2" "mirissa-whales"
Copy-StoryImages "story3" "adams-peak-sunrise"

# Copy hero background to common
if (Test-Path "$baseImagePath\hero-background.jpg") {
    Copy-Item "$baseImagePath\hero-background.jpg" "$baseImagePath\common\hero-background.jpg" -Force
    Write-Host "Copied hero background to common directory" -ForegroundColor Green
}

Write-Host "Image organization complete!" -ForegroundColor Green
