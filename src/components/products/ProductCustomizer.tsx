import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { Image, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ProductCustomizerProps {
  currentColor: string
  onColorChange: (color: string) => void
  onImageUpload: (imageUrl: string) => void
}

export function ProductCustomizer({
  currentColor,
  onColorChange,
  onImageUpload,
}: ProductCustomizerProps) {
  const [selectedTab, setSelectedTab] = useState('color')

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        onImageUpload(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mt-4">
          Personalizar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Personalize sua garrafa</DialogTitle>
        </DialogHeader>
        <Tabs
          defaultValue="color"
          className="w-full"
          value={selectedTab}
          onValueChange={setSelectedTab}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="color">Cor</TabsTrigger>
            <TabsTrigger value="image">Imagem</TabsTrigger>
          </TabsList>
          <TabsContent value="color" className="mt-4">
            <HexColorPicker color={currentColor} onChange={onColorChange} />
            <div className="grid grid-cols-5 gap-2 mt-4">
              {['#FF4B4B', '#4B9EFF', '#FFD54B', '#4BFF4B', '#9E4BFF'].map(
                color => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: color }}
                    onClick={() => onColorChange(color)}
                  />
                )
              )}
            </div>
          </TabsContent>
          <TabsContent value="image" className="mt-4">
            <div className="flex flex-col items-center gap-4">
              <label className="w-full cursor-pointer">
                <div className="flex flex-col items-center gap-2 p-6 border-2 border-dashed rounded-lg">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Clique para fazer upload
                  </span>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
