
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const isMobile = useIsMobile();

  // Camera configuration state
  const [cameraConfig, setCameraConfig] = useState({
    ipAddress: "",
    username: "",
    password: "",
    channel: ""
  });

  // OSD configuration state
  const [osdConfig, setOsdConfig] = useState({
    size: "",
    id: "",
    x: "",
    y: ""
  });

  // Balance configuration state
  const [balanceConfig, setBalanceConfig] = useState({
    port: "",
    baudrate: ""
  });

  const handleSave = () => {
    // Here you would typically send this data to your backend
    const configData = {
      camera: cameraConfig,
      osd: osdConfig,
      balance: balanceConfig
    };
    
    console.log('Saving configuration:', configData);
    toast.success("Configuração salva com sucesso!");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-[#1a65a3] p-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-2 md:space-y-0">
            <a href="#" className="text-white hover:text-gray-200 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">Services</a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">Our Project</a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">About us</a>
          </div>
          <Button variant="outline" className="bg-white hover:bg-gray-100 text-[#1a65a3] w-full md:w-auto">
            Contact us
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="/lovable-uploads/b5edc70c-b77d-44f7-b743-66d4880bee29.png" 
            alt="Team meeting" 
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right side - Configuration Forms */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Hikvision Camera Configuration */}
          <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-[#1a65a3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19 12a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" />
              </svg>
              <h2 className="text-[#1a65a3] font-medium">Configuração da câmera Hikvision</h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <label className="text-sm text-gray-600">Endereço IP:</label>
                <Input 
                  className="w-full md:w-2/3" 
                  value={cameraConfig.ipAddress}
                  onChange={(e) => setCameraConfig({...cameraConfig, ipAddress: e.target.value})}
                />
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <label className="text-sm text-gray-600">Usuário:</label>
                <Input 
                  className="w-full md:w-2/3"
                  value={cameraConfig.username}
                  onChange={(e) => setCameraConfig({...cameraConfig, username: e.target.value})}
                />
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <label className="text-sm text-gray-600">Senha:</label>
                <Input 
                  type="password" 
                  className="w-full md:w-2/3"
                  value={cameraConfig.password}
                  onChange={(e) => setCameraConfig({...cameraConfig, password: e.target.value})}
                />
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <label className="text-sm text-gray-600">Canal:</label>
                <Input 
                  className="w-full md:w-2/3"
                  value={cameraConfig.channel}
                  onChange={(e) => setCameraConfig({...cameraConfig, channel: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* OSD Configuration */}
          <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-[#1a65a3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
              </svg>
              <h2 className="text-[#1a65a3] font-medium">Configuração do OSD</h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <label className="text-sm text-gray-600">Tamanho:</label>
                <Input 
                  className="w-full md:w-2/3"
                  value={osdConfig.size}
                  onChange={(e) => setOsdConfig({...osdConfig, size: e.target.value})}
                />
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <label className="text-sm text-gray-600">ID:</label>
                <Input 
                  className="w-full md:w-2/3"
                  value={osdConfig.id}
                  onChange={(e) => setOsdConfig({...osdConfig, id: e.target.value})}
                />
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <label className="text-sm text-gray-600">X:</label>
                <Input 
                  className="w-full md:w-2/3"
                  value={osdConfig.x}
                  onChange={(e) => setOsdConfig({...osdConfig, x: e.target.value})}
                />
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <label className="text-sm text-gray-600">Y:</label>
                <Input 
                  className="w-full md:w-2/3"
                  value={osdConfig.y}
                  onChange={(e) => setOsdConfig({...osdConfig, y: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Balance Configuration */}
          <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-[#1a65a3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M2 12h20" />
              </svg>
              <h2 className="text-[#1a65a3] font-medium">Configuração da balança</h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <label className="text-sm text-gray-600">Porta:</label>
                <Input 
                  className="w-full md:w-2/3"
                  value={balanceConfig.port}
                  onChange={(e) => setBalanceConfig({...balanceConfig, port: e.target.value})}
                />
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <label className="text-sm text-gray-600">Baudrate:</label>
                <Input 
                  className="w-full md:w-2/3"
                  value={balanceConfig.baudrate}
                  onChange={(e) => setBalanceConfig({...balanceConfig, baudrate: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-6">
            <Button 
              variant="outline" 
              className="bg-white hover:bg-gray-100 text-[#1a65a3] border-[#1a65a3] w-full md:w-auto"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
